export default function toURL(str: string): string {
   return str.toLowerCase().replace(/\s/g, '-');
}
