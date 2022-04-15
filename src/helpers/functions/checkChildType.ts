import ChildrenType from 'helpers/types/ChildrenType';

export function checkChildType(
	children: ChildrenType,
	parentName: string,
	childName: string,
) {
	if (children) {
		if (Array.isArray(children)) {
			children.forEach((child) => {
				if (child.type.name !== childName) {
					throw Error(
						createErrorString(parentName, childName, child.type.name),
					);
				}
			});
		} else {
			if (children.type.name !== childName) {
				throw Error(createErrorString(parentName, childName, children.type.name));
			}
		}
	}
}

function createErrorString(
	parentName: string,
	expectedChildName: string,
	currentChildName: string,
): string {
	return `Component <${parentName}> can accept only <${expectedChildName}> elements, but instead got <${currentChildName}>`;
}
