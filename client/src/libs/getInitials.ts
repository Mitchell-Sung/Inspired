function getInitials(name: string): string {
  const result = name
    .split(' ')
    .map((n) => n[0])
    .join('');
  return result;
}

export default getInitials;
