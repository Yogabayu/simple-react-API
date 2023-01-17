import useFetchData from "./useFetchData";

function Users() {
  const { data } = useFetchData("https://jsonplaceholder.typicode.com/posts");

  return (
    <div>
      {data &&
        data.map((user) => (
          <div className="text-white" key={user.id}>
            <h1> {user.title} </h1>
            <p> {user.body} </p>
          </div>
        ))}
    </div>
  );
}

export default Users;
