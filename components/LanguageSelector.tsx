import Link from "next/link";
import { Button } from "@/components/ui/button";

const LanguageSelector = () => {
  return (
    <div>
      <Link href="/" locale="en-US">
        <Button>English</Button>
      </Link>
      <Link href="/fr" locale="fr">
        <Button>French</Button>
      </Link>
      <Link href="/nl-NL" locale="nl-NL">
        <Button>Dutch</Button>
      </Link>
    </div>
  );
};

export default LanguageSelector;
