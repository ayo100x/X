import ExploreHeader from "../components/ExploreHeader";
import ExploreTabs from "../components/ExploreTabs";
import PostsForYou from "../components/postsForYou";
import TodaysNews from "../components/todaysNews";
import TrendList from "../components/trendList";
import WhoToFollow from "../components/whoToFollow";


const Explore = () => {

  
  return (
    <div className="h-full relative flex flex-col">
      <div>
        <ExploreHeader />
        <ExploreTabs />
      </div>
      {/* body */}
      <div className="mt-3 overflow-y-auto custom-scrollbar">
        <TodaysNews />
        <TrendList />
        <WhoToFollow />
        <PostsForYou />
        
      </div>
    </div>
  );
};

export default Explore;
