export function validation(data: FormSchema) {
    return {
        nama: data.nama.length === 0 || data.nama === ''
    } as const;
}

export interface FormSchema {
    nama: string
}