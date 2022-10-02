export const requiredField = (value: string) => {
	return value ? undefined : "the field is empty";
};
