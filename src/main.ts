export function idothings(text: string): string {
    let result: string = "";
    for (let n: number = 0; n < text.length; ++n) {
        let c: string = text.charAt(n);
        if (c == '<') {
            while (n < text.length && text.charAt(n) != '/' && text.charAt(n) != '>')
                n++;
            if (n < text.length && text.charAt(n) == '/')
                n += 4;
            else
                n++;
        }
        if (n < text.length)
            result += text.charAt(n);
    }

    return result;
}
