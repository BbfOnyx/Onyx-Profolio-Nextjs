import type { Metadata } from "next";
import { cookies } from "next/headers";
import Link from "next/link";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Admin Portal Login | OnyxAdmin",
  description: "Secure authentication portal for Bbf Onyx portfolio management.",
};

async function unlockAdmin(formData: FormData) {
  "use server";

  const submittedCode = String(formData.get("code") ?? "").trim();
  const fromParam = String(formData.get("from") ?? "").trim();
  const expectedCode = process.env.ADMIN_ACCESS_CODE ?? "portfolio-admin";

  if (submittedCode !== expectedCode) {
    const destination = fromParam
      ? `/admin/login?error=invalid&from=${encodeURIComponent(fromParam)}`
      : "/admin/login?error=invalid";
    redirect(destination);
  }

  const cookieStore = await cookies();
  cookieStore.set("admin_session", "authenticated", {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: 60 * 60 * 8,
  });

  const destination = fromParam.startsWith("/admin") ? fromParam : "/admin";
  redirect(destination);
}

export default async function AdminLoginPage({
  searchParams,
}: {
  searchParams: Promise<{ error?: string; from?: string }>;
}) {
  const params = await searchParams;

  const cookieStore = await cookies();
  if (cookieStore.get("admin_session")?.value === "authenticated") {
    redirect("/admin");
  }

  return (
    <div
      style={{
        minHeight: "85vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "2rem",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "440px",
          background: "var(--bg-card)",
          border: "1px solid var(--border)",
          borderRadius: "var(--radius-lg)",
          padding: "2.5rem 2rem",
          boxShadow: "var(--shadow-lg), 0 0 35px var(--purple-glow-soft)",
          textAlign: "center",
        }}
      >
        <div
          style={{
            width: "56px",
            height: "56px",
            background: "linear-gradient(135deg, var(--purple), var(--purple-dark))",
            color: "white",
            borderRadius: "var(--radius-md)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "1.4rem",
            fontWeight: 800,
            margin: "0 auto 1.2rem",
            boxShadow: "0 8px 24px var(--purple-glow)",
          }}
        >
          OP
        </div>

        <h1 style={{ fontSize: "1.8rem", fontWeight: 800, margin: "0 0 0.4rem" }}>
          Onyx<span>Admin</span>
        </h1>
        <p style={{ color: "var(--text-muted)", fontSize: "0.92rem", marginBottom: "2rem" }}>
          Enter your administrative access passkey to manage your portfolio CMS.
        </p>

        <form action={unlockAdmin} style={{ textAlign: "left" }}>
          <input type="hidden" name="from" value={params.from ?? ""} />

          <div style={{ marginBottom: "1.2rem" }}>
            <label
              htmlFor="code"
              style={{
                display: "block",
                fontSize: "0.85rem",
                fontWeight: 600,
                color: "var(--text-muted)",
                marginBottom: "0.5rem",
              }}
            >
              Access Passkey
            </label>
            <input
              id="code"
              name="code"
              type="password"
              placeholder="Enter passkey (default: portfolio-admin)"
              required
              autoFocus
              style={{
                width: "100%",
                background: "var(--bg)",
                border: "1px solid var(--border)",
                borderRadius: "var(--radius-sm)",
                padding: "0.85rem 1.1rem",
                color: "var(--text)",
                outline: "none",
                fontSize: "0.95rem",
              }}
            />
          </div>

          {params.error === "invalid" && (
            <p
              style={{
                color: "var(--accent-rose)",
                fontSize: "0.88rem",
                margin: "0 0 1.2rem",
                fontWeight: 500,
              }}
            >
              ⚠️ Invalid passkey. Please check your credentials and try again.
            </p>
          )}

          <button
            type="submit"
            className="btn-primary"
            style={{ width: "100%", padding: "0.95rem", justifyContent: "center", fontSize: "1rem" }}
          >
            Unlock Dashboard &rarr;
          </button>
        </form>

        <div style={{ marginTop: "2rem", borderTop: "1px solid var(--border)", paddingTop: "1.2rem" }}>
          <Link href="/" style={{ color: "var(--text-muted)", fontSize: "0.88rem" }}>
            &larr; Return to Live Portfolio
          </Link>
        </div>
      </div>
    </div>
  );
}
