import * as React from "react";

export interface HelloProps { name: string; favoriteAnimal: string; }

export const Hello = (props: HelloProps) => <h1>Hello {props.name}, you like {props.favoriteAnimal}!</h1>;