import UserFollowCard from "./userFollowCard"

const WhoToFollow = () => {
 const  users = [
    {
        id: 1,
        name: "John",
        userName: "johndoe",
        about: "I am a designer and i love designing",
        userAvatar: "https://randomuser.me/api/portraits/men/11.jpg",
    },
    {
        id: 2,
        name: "Mike",
        userName: "mikelll",
        about: "I am a designer and i love designing",
        userAvatar: "https://randomuser.me/api/portraits/men/35.jpg",
    },
    {
        id: 3,
        name: "Sam",
        userName: "samuellll",
        about: "I am a designer and i love designing",
        userAvatar: "https://randomuser.me/api/portraits/men/61.jpg",
    }
  ]

  return (
    <div className="flex flex-col mt-4 mb-4 ">
      <span className="text-[23px] font-medium text-white m-3">Who to follow</span>

      {users.map((user) => 
        <UserFollowCard key={user.id} user={user} />
    )}
        
    </div>
  )
}

export default WhoToFollow
