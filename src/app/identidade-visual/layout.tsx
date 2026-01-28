import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projetos",
};

export default function ProjetosLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
