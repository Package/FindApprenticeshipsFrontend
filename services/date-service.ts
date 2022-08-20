
export function formatDate(dateStr: string): string {
    var date = new Date(dateStr);

    return date.toLocaleDateString();
}