import User from "./types/type.user"

type CardProps = {
    title: string,
    image: string,
    starsNumbers: number,
    user: User
}

type IUser = {

}

export { CardProps, IUser };