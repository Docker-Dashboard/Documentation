import { getDictionary } from "./dictionaries";

export default async function notFound() {
  const dictionary = await getDictionary();
  return <p className="notFound">{dictionary.error.404}</p>;
}
