import textData from "../../text.json";

type JsonValue = string | number | boolean | JsonObject | JsonArray;
interface JsonObject {
    [key: string]: JsonValue;
}
interface JsonArray extends Array<JsonValue> {}

const useExtractText = () => {
    const keyToText = (key: string): string | undefined => {
        const keys = key.split(".");

        let result: any = textData;
        for (const k of keys) {
            result = result?.[k];
            if (result === undefined) {
                return undefined;
            }
        }
        return result;
    };

    return { keyToText };
};
export default useExtractText;
