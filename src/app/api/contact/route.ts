import fs from "fs";
import path from "path";

type ContactPayload = {
  childName?: string;
  childAge?: string;
  problem?: string;
  phone?: string;
  email?: string;
  message?: string;
  serviceHref?: string | null;
  serviceTitle?: string | null;
  problemLabel?: string | null;
};

export async function POST(request: Request) {
  try {
    const body: ContactPayload = await request.json();

    const errors: Record<string, string> = {};
    if (!body.childName || !body.childName.trim()) errors.childName = "Imię dziecka jest wymagane";
    if (!body.childAge || !body.childAge.trim()) errors.childAge = "Wiek jest wymagany";
    if (!body.problem || !body.problem.trim()) errors.problem = "Wybierz problem";
    if (!body.phone || !body.phone.trim()) errors.phone = "Telefon jest wymagany";
    if (!body.email || !body.email.trim()) errors.email = "E-mail jest wymagany";
    if (!body.message || !body.message.trim()) errors.message = "Wiadomość jest wymagana";

    // Format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (body.email && !emailRegex.test(body.email)) {
      errors.email = "Niepoprawny format adresu e-mail";
    }

    const phoneDigits = (body.phone || "").replace(/\D/g, "");
    if (body.phone && phoneDigits.length < 7) {
      errors.phone = "Niepoprawny numer telefonu";
    }

    if (Object.keys(errors).length) {
      return new Response(JSON.stringify({ ok: false, errors }), { status: 400, headers: { "Content-Type": "application/json" } });
    }

    // Persist to a local JSON file (development-friendly). Directory: /data/contacts.json
    const dataDir = path.join(process.cwd(), "data");
    await fs.promises.mkdir(dataDir, { recursive: true });
    const file = path.join(dataDir, "contacts.json");

    let existing: unknown[] = [];
    try {
      const content = await fs.promises.readFile(file, "utf8");
      existing = JSON.parse(content || "[]");
    } catch {
      existing = [];
    }

    const record = {
      childName: body.childName ?? null,
      childAge: body.childAge ?? null,
      problem: body.problem ?? null,
      serviceHref: body.serviceHref ?? null,
      serviceTitle: body.serviceTitle ?? null,
      problemLabel: body.problemLabel ?? null,
      phone: body.phone ?? null,
      email: body.email ?? null,
      message: body.message ?? null,
      receivedAt: new Date().toISOString(),
    };

    // coerce existing to array and append
    const arr = Array.isArray(existing) ? existing : [];
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (arr as any[]).push(record);
    await fs.promises.writeFile(file, JSON.stringify(arr, null, 2), "utf8");

    return new Response(JSON.stringify({ ok: true }), { status: 200, headers: { "Content-Type": "application/json" } });
  } catch {
    // Keep error details minimal for security
    return new Response(JSON.stringify({ ok: false, error: "Server error" }), { status: 500, headers: { "Content-Type": "application/json" } });
  }
}
