export function formatDate(dateString: string | undefined): string {
  if (!dateString) return "Data inválida";
  const date = new Date(dateString);

  if (isNaN(date.getTime())) return "Data inválida";

  return new Intl.DateTimeFormat("pt-BR", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  }).format(date);
}
