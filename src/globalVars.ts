export const ProfileNewPostTextareaPlaceHolder = "Your news..."
export const OwnerAvatarExampleURL = "https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg?w=1060&t=st=1693562751~exp=1693563351~hmac=de7403ac3a75b512d3b6f30b9adeea39dbce662a196a8516356db4dc2a207d3c"
export const UserAvatarExampleURL = "https://img.freepik.com/free-photo/lifestyle-summer-people-emotions-concept-enthusiastic-handsome-male-model-with-happy-smile-white-teeth-standing-casual-t-shirt-yellow-background-satisfied_1258-60040.jpg?w=1380&t=st=1693564602~exp=1693565202~hmac=b7121b3e732b4f9251fd2c88888326fc61056bd9fa9ba6d0aaa26bb0dce677f2"

export const switches = {
  sidebarIcons: true,
  messagesUserWithAvatar: true,
}

export type UserType = {
  id: number
  name: string;
  avatar: string
}

export const users: UserType[] = [
  {
    id: 1,
    name: 'John Doe',
    avatar: UserAvatarExampleURL
  },
  {
    id: 2,
    name: 'Jane Smith',
    avatar: UserAvatarExampleURL
  },
  {
    id: 3,
    name: 'Bob Johnson',
    avatar: UserAvatarExampleURL
  },
  {
    id: 4,
    name: 'Bob Johnson',
    avatar: UserAvatarExampleURL
  },
  {
    id: 5,
    name: 'Bob Johnson',
    avatar: UserAvatarExampleURL
  },
];