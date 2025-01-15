import { LanguageSwitcherType } from "@/types/types";

import { DICTIONARY } from "@/settings/dictionary";
import Form from "next/form";
import { glass } from "./icons";

const searchPlaceholder = DICTIONARY["searchPlaceholder"];

export default function SearchBar({ language }: { language: LanguageSwitcherType }) {
    return (
        <Form
            action={"/arts/search"}
            className='centered pl-2 border-[1px] border-foreground rounded-sm'>
            <input
                name='query'
                spellCheck={false}
                className='w-16 h-8 md:w-24'
                type='text'
                placeholder={searchPlaceholder[language]}
            />
            <button type='submit' className='bg-foreground h-8 w-8 centered'>
                {glass}
            </button>
        </Form>
    );
}
