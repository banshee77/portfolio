import React, { useState, useEffect } from 'react';
import ExampleWorkModal from '../../containers//ExampleWorkModal/ExampleWorkModal';
import ExampleWorkBubble from '../../containers/ExampleWorkBubble/ExampleWorkBubble';
import classes from './ExampleWork.module.css';

const myExamples = [
  {
    'title': "A Serverless Portfolio",
    'href': "https://portfolio.wieslawpedzich.com/",
    'desc': "In general every time there is a push to a github repository CodePipeline is downloading source code from master branch, compiling it with CodeBuild and deploying to S3 bucket using Lambda. Additionally the same Lambda triggers SNS email notification with build status. Route53 is managing domain name. CloudFront, which sits infront of S3 bucket, makes portfolio website wold wide accesible. That's it ! We are now able to access portfolio using CI/CD serverless architecture .",
    'image': {
      'desc': "A Serverless Portfolio",
      'src': "Portfolio",
      'comment': "Portfolio Architecture"
    }
  },
  {
    'title': "Todoer",
    'href': "https://todoer.wieslawpedzich.com/",
    'desc': "This time I wanted to learn about Amplify which provides a declarative and easy-to-use API for cloud operations. First off all I have created simple react application which later on has been modified to TODOER (simple To Do list). Now, I could start my journey with Amplify. I have installed dedicated command line <npm install -g @aws-amplify/cli> which makes easy to create & configure AWS cloud services on the fly directly from the local environment. In general the following commands deployed my react application into the cloud: 'amplify configure' enabled access into AWS, 'amplify init' initialized Amplify powered cloud app, 'amplify hosting add' configured S3AndCloudFront operation, 'amplify auth add' configured Cognito User Pool with Autorization Panel for the application, 'amplify api add' configured AppSync with Cognito authorization and DynamoDB table based on provided GraphQLSchema, 'amplify push' built local backend resources and provision it in the cloud, 'amplify publish' built local backend and frontend resources and provision it in the cloud. TADAM ! That's it. For the cleanup I used 'amplify delete' command keeping in mind that it removed only Stacks, but not Buckets and Roles.",
    'image': {
      'desc': "Todoer atchitecture",
      'src': "Todoer",
      'comment': "Todoer atchitecture"
    }
  },
  {
    'title': "Notes - Scratch",
    'href': "https://notes.wieslawpedzich.com/",
    'desc': "Implementing next simple web application 'Notes - Scratch' I was learing more the following set of technologies and services: Lambda & API Gateway for our serverless API, DynamoDB for our database, Cognito for user authentication and securing our APIs, S3 for hosting our app and file uploads,CloudFront for serving out our app, Route 53 for our domain, Certificate Manager for SSL, React.js for our single page app, React Router for routing, Bootstrap for the UI Kit, Stripe for processing credit card payments, Seed for automating Serverless deployments, Netlify for automating React deployments, GitHub for hosting our project repos.",
    'image': {
      'desc': "Notes - Scratch",
      'src': "Scratch",
      'comment': "Notes - Scratch"
    }
  },
  {
    'title': "Burger Builder",
    'href': "https://burger-builder.wieslawpedzich.com/",
    'desc': "Here I was learning more about React and Redux. For this exercise as database backend and authentication I was using Firebase, a comprehensive mobile development platform. Regarding AWS I was looking for a simple solution how to ensure that my React application will be deployed to production after every commit. At the end I decided to use Amplify. It's was ready easy. First you need to create repository with your app on GIT. Than go to AWS Amplify console and create new Deployment. There you need to select your GIT repository and build configuration (default is provided by AWS). Additionally I have set email notification for deploymnet triggers . That's it.",
    'image': {
      'desc': "Burger Builder",
      'src': "Burger",
      'comment': "Amplify Deployment"
    }
  }
]


const ExampleWork = props => {

  const [modalOpen, setModalOpen] = useState(false);
  const [selectedExample, setSelectedExample] = useState(myExamples[0]);
  const [examples, setExamples] = useState(myExamples);

  const openModal = (evt, example) => {
    setModalOpen(true);
    setSelectedExample(example);
  }

  const closeModal = (evt) => {
    setModalOpen(false)
  }

  return (
    <span>
      <section className={classes.section}>
        {examples.map((idx) => {
          return (
            <ExampleWorkBubble example={idx} key={idx.title}
              openModal={openModal} />
          )
        })
        }
      </section>

      <ExampleWorkModal example={selectedExample}
        open={modalOpen} closeModal={closeModal} />

    </span>
  )
}

export default ExampleWork;

