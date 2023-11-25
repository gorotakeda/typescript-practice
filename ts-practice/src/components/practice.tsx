import { profile } from "console"
import { ReactNode } from "react"

const Child = ({
  children,
  user
}:{
  children: ReactNode
  user: {
    name: string
    age: number
    isChild: boolean
    birthday: string
    profile?: {
      height: number
      weight: number
    }
  }
}) => {
    return (
        <div>
            <h1>Child</h1>
            {children}
            <p>{user.name}</p>
            <p>10年後{user.age + 10}歳</p>
            <p>{user.isChild ? "子供です" : "大人です"}</p>
            <p>{user.birthday}</p>
            {user.profile && (
                <p>
                    {user.profile.height}cm {user.profile?.weight}kg
                </p>
            )}
        </div>
    )
}

export const Practice = () => {
    return (
        <div>
            <h1>Practice</h1>
            <Child user = {{
                name: "Taro",
                age: 10,
                isChild: false,
                birthday: "2020/01/01",
                profile: {
                    height: 180,
                    weight: 70
                }
              }}>
                <h1>親から渡します</h1>
            </Child>
        </div>
    )
}
