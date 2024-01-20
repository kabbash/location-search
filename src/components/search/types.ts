export interface SearchStateProps<T>{
    options: {title: string, value: T}[];
    label: string;
}

export interface SearchDispatchProps<T> {
    onSelectionChange: (value: T) => void

}

export interface SearchProps<T> extends SearchStateProps<T>, SearchDispatchProps<T>{}