export interface File {
    _id: string,
    language: string,
    title: string,
    subtitle: string,
    createTime: Date,
    content: string,
}
export interface Tag {
    name: string,
    _id: string,
}
