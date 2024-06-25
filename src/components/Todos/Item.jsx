import React from "react";

const Item = (props) => {
  const { todo, id } = props;
  const completed = todo.completed_at ? "completed" : "";
  return (
    <li key={id} className="list-group-item">
      <div className="row">
        <div className={`col-md-5 ${completed}`}>{todo.title}</div>
        <div className={`col-md-3 ${completed}`}>
          {todo.firstname} {todo.lastname}
        </div>
        <div className={`col-md-2 ${completed}`}>{todo.completed_at}</div>
        <div className="col-md-2 text-end">
          <a
            className={
              todo.completed_at ? "text-primary-emphasis" : "text-success"
            }
            href={`${todo.id}/completed`}
          >
            <i
              className={`bi bi-clipboard-check${
                todo.completed_at ? "-fill" : ""
              }`}
            ></i>
          </a>

          {!todo.completed_at && (
            <>
              <a className="text-info-emphasis" href={`/${todo.id}/edit`}>
                <i className="bi bi-pencil-square"></i>
              </a>
              <a className=" text-danger" href={`/${todo.id}/delete`}>
                <i className="bi bi-x-circle-fill"></i>
              </a>
            </>
          )}
        </div>
      </div>
    </li>
  );
};

export default Item;
