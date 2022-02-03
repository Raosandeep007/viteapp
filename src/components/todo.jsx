import { useEffect, useState } from "react";

function Todo() {
  const [title, setTitle] = useState("");
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [page, setPage] = useState(1);

  useEffect(() => {
    getTodos(page);
  }, [page]);
  const getTodos = (page = 1) => {
    setIsLoading(true);
    return fetch(
      `https://json-server-mocker-masai.herokuapp.com/tasks?_page=${page}&_limit=2`
    )
      .then((res) => res.json())
      .then((res) => {
        setData(res);
      })
      .catch((err) => {
        setIsError(true);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const addTodos = (title) => {
    const payload = {
      title,
      status: false,
    };
    setIsLoading(true);
    return fetch("https://json-server-mocker-masai.herokuapp.com/tasks", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    })
      .then((res) => res.json())
      .then((res) => {
        return getTodos();
      })
      .catch((err) => {
        setIsError(true);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return isLoading ? (
    <div>....loading</div>
  ) : isError ? (
    <div>Something went wrong</div>
  ) : (
    <div>
      <div>
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Add Somthing"
        />
        <button onClick={() => addTodos(title)}>Add</button>
      </div>
      <ul>
        {data.map((item) => (
          <li key={item.id}>{`${item.title} - ${item.status}`}</li>
        ))}
      </ul>
      <h3>Page: {page}</h3>
      <button
        disabled={page === 1 || data.length === 0}
        onClick={() => setPage(page - 1)}
      >
        PREV
      </button>
      <button
        disabled={data.length === 1 || 0}
        onClick={() => setPage(page + 1)}
      >
        NEXT
      </button>
    </div>
  );
}

export { Todo };
