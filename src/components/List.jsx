import React, { Fragment } from "react";

const List = (props) => {
    return(
        <Fragment>
            {props.people.map((person) => {
                return(
                    <article key={person.id} className="person">
                        <img src={person.image} alt={person.name} />
                        <div>
                            <h4>{person.name}</h4>
                            <p>{person.age}</p>
                        </div>
                    </article>
                );
            })}
        </Fragment>
    );
};

export default List;