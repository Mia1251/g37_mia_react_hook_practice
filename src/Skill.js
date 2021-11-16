import React, { Fragment, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

const Skill = () => {
    const [skills, setSkills] = useState([]);
    const [loadData, setLoadData] = useState(false);

    useEffect(()=> {
        console.log("useEffect has been executed!");
    }, [loadData]);

    const ShowData = (props) => {
        return (
            <Fragment>
                {
                    props.skills.map(
                        skill => (
                            <ul className="row pb-2" key={skill.id}>
                                <li className="form-lable">{skill.title}</li>
                            </ul>
                    ))
                }
            </Fragment>
        );
    };
    const Form = () => {
        const { register, handleSubmit, formState: {errors} } = useForm();

        const saveData = (data) => {
            console.log("------------------------");
            console.log(data);
            console.log("------------------------");
            const id = 'A_' + Math.random().toString(36).substr(2, 9);
            const title = data.title;
            const skill = { id, title };
            skills.push(skill);
            setLoadData(!loadData);
            console.log("SKILLS:", skills);
        };

        return (
            <Fragment>
                <h5>My Form</h5>
                <form onSubmit={handleSubmit(saveData)}>
                    <div className="row">
                        <div className="col">
                            <input type="text" className="form-control" {...register("title", { required: true } )} placeholder="Enter Title" />
                            {errors.title && <span className="text-danger">Title is required!</span>}                                
                        </div>
                        <div className="col">
                            <button type="submit" className="btn btn-success">+</button>
                        </div>                
                    </div>
                </form>
            </Fragment>
        );
    };

    return (
        <div className="container">
            <h3>Fullstack Developer Skills</h3>
            <ShowData skills={skills} />
            <Form />
        </div>
    );
};

export default Skill;