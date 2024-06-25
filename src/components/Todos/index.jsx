import "./Todo.css";

const Todos = () => {
  return (
    <div>
      <div className="todos-wrapper">
        <h4 className="mb-3"> Todo List </h4>
        <div className="todos maxW">
          <ul className="list-group">
            <li className="list-group-item">
              <div className="row">
                <div className="col-md-5 completed">Workout at gym</div>
                <div className="col-md-3 completed">John Doe</div>
                <div className="col-md-2 completed">
                  2024-06-11T08:08:53.000Z
                </div>
                <div className="col-md-2 text-end">
                  <a className="text-primary-emphasis " href="/3/completed">
                    <i className="bi bi-clipboard-check-fill"></i>
                  </a>
                </div>
              </div>
            </li>

            <li className="list-group-item">
              <div className="row">
                <div className="col-md-5">Team building activity</div>
                <div className="col-md-3">John Doe</div>
                <div className="col-md-2">2024-06-25T06:26:42.000Z</div>
                <div className="col-md-2 text-end">
                  <a className="text-primary-emphasis " href="/11/completed">
                    <i className="bi bi-clipboard-check-fill"></i>
                  </a>
                </div>
              </div>
            </li>

            <li className="list-group-item">
              <div className="row">
                <div className="col-md-5">Organize charity event</div>
                <div className="col-md-3">John Doe</div>
                <div className="col-md-2">2024-06-25T06:46:17.000Z</div>
                <div className="col-md-2 text-end">
                  <a className="text-primary-emphasis " href="/21/completed">
                    <i className="bi bi-clipboard-check-fill"></i>
                  </a>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Todos;
