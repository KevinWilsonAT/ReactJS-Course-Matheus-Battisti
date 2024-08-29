import { parse, v4 as uuidv4 } from 'uuid'

import styles from './Project.module.css'
import cstyle from '../layout/Container.module.css'

import Loading from '../layout/Loading'
import Container from '../layout/Container'
import Message from '../layout/Message'
import ProjectForm from '../project/ProjectForm'
import ServiceForm from '../service/ServiceForm'

import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'

function Project () {
    const { id } = useParams()
   
    const [project, setProject] = useState([])
    const [showProjectForm, setShowProjectForm] = useState(false)
    const [showServiceForm, setShowServiceForm] = useState(false)
    const [message, setMessage] = useState ()
    const [type, setType] = useState()

    useEffect(() => {

        setTimeout(() => {
            fetch(`http://localhost:5000/projects/${id}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            }).then((resp) => resp.json())
            .then((data) => {setProject(data)})
        }, 300);
    }, [id])

    function editPost(project) {
        setMessage()
        // budget validation
        if(project.budget < project.cost) {
            setMessage('The budget cannot be lesser than the cost of the project')
            setType('error')
            return false
        }
        
        fetch(`http://localhost:5000/projects/${project.id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json', 
            },
            body: JSON.stringify(project),
        })
        .then(resp => resp.json())
        .then((data) => {
            setProject(data)
            setShowProjectForm(false)
            setMessage('Project Updated')
            setType('success')
        })
        .catch(err => console.log(err))
    }

    function createService(project) {
        setMessage()

        //last service
        const lastService = project.services[project.services.length - 1]

        lastService.id = uuidv4()

        const lastServiceCost = lastService.cost

        const newCost = parseFloat(project.cost) + parseFloat(lastServiceCost)

        // Maximum value validation
        if(newCost > parseFloat(project.budget)) {
            setMessage('Budget exceeded, verify the Service Cost')
            setType('error')
            project.services.pop()
            return false
        }

        // add service cost to project total cost
        project.cost = newCost

        // update project

        fetch(`http://localhost:5000/projects/${project.id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json', 
            },
            body: JSON.stringify(project),
        })
        .then(resp => resp.json())
        .then((data) => {
            // show services
            console.log(data)
        })
        .catch(err => console.log(err))
    }

    function toggleProjectForm() {
        setShowProjectForm(!showProjectForm)
    }

    function toggleServiceForm() {
        setShowServiceForm(!showServiceForm)
    }

    return(
        <>
            {project.name ? (
                <div className={styles.project_details}>
                    <Container customClass={cstyle.column}>
                        {message && <Message type={type} msg={message} />}
                        <div className={styles.details_container}>
                            <h1> Project: {project.name}</h1>
                            <button className={styles.btn} onClick={toggleProjectForm}>
                                {!showProjectForm ? 'Edit Project' : 'Close'}
                            </button>
                            {!showProjectForm ? (
                                <div className={styles.project_info}>
                                    <p>
                                        <span>Category:</span> {project.category.name}
                                    </p>
                                    <p>
                                        <span>Total Budget:</span> {project.budget}
                                    </p>
                                    <p>
                                        <span>Total Spent:</span> {project.cost}
                                    </p>
                                </div>
                            ) : (
                                <div className={styles.project_info}>
                                    <ProjectForm
                                        handleSubmit={editPost}
                                        btnText="Finish Editing"
                                        projectData={project}
                                    />
                                </div>
                            )}
                        </div>
                        <div className={styles.service_form_container}>
                            <h2>Add a service:</h2>
                            <button className={styles.btn} onClick={toggleServiceForm}>
                                {!showServiceForm ? 'Add Service' : 'Close'}
                            </button>
                            <div className={styles.project_info}>
                                {showServiceForm &&
                                    <ServiceForm
                                        handleSubmit={createService}
                                        btnText='Add Service'
                                        projectData={project}
                                    />
                                }
                            </div>
                        </div>
                        <h2>Services</h2>
                        <Container customClass={cstyle.start}>
                            <p>Services Items</p>
                        </Container>
                    </Container>
                </div>
            ) : (
                <Loading />
            )}
        </>
    )
}

export default Project