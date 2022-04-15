import { ReactNode } from 'react';

type ComponentNameType = { type: { name: string } };
type ChildrenType = ReactNode & (ComponentNameType[] | ComponentNameType);

export default ChildrenType;
