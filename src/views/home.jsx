import NewTitle from "../components/NewTitle";
import Topics from "../components/topics";

const Home = () => {
  return (
    <div>
      <Topics title="title 1" text="Just to test the element" />
      <Topics title="title 2" text="another to test the element" />
      <Topics title="title 3" text="a third to test the element" />
      <NewTitle />
    </div>
  );
};

export default Home;
<Topics />;
