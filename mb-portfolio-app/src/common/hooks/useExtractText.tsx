import textData from '../../../text.json';

type JsonValue = string | number | boolean | JsonObject | JsonArray;
interface JsonObject {
	[key: string]: JsonValue;
}
interface JsonArray extends Array<JsonValue> {}

export const useExtractText = () => {
	const keyToText = (key: string): JsonValue | undefined => {
		const keys = key.split('.');

		let result: JsonValue | undefined = textData;
		for (const k of keys) {
			result = (result as JsonObject)?.[k];
			if (result === undefined) {
				return undefined;
			}
		}
		return result;
	};

	return { keyToText };
};
export default useExtractText;
