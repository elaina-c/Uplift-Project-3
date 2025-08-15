# A ReactJS e-Commerce app

## Introduction

Let's create a ReactJS e-Commerce application!
This project will build ReactJS skills that you've learned so far.

## Learning Objectives

- Practice your ReactJS skills.
- Continue applying your HTML, CSS and Javascript skills.

In this project, primary focus is to practice Reactjs skills.

### Some ideas if you are feeling stuck

- Choose any e-commerce application of something close to your heart eg. food, clothes, music, etc.
- **Schedule a check-in with your instructor** to get feedback or help.

## Technical Specifications

Technical specifications are requirements on the implementation or design of a software. These do not necessarily affect the functionality of the application.

The below are the technical specifications for this project:

- Code should make use of JSX.
- Code should make use of React hooks.
- Code should make use of React Router.
- Code should make use state to build a stateful React application.
- Use of Uplift Code Camp's HTML, CSS, Javascript and ReactJS coding and committing standards.

_For Uplift Code Camp's code and committing standards, refer to your Batch's Gitlab resources folder = /batch*/resources/course-materials/*.md._

### FAQs

> Can we use a CSS framework? Can we use SASS/SCSS?

Yes! Feel free to explore and learn new tools! So long as learning those new tools does not derail you from the primary goal of the project, which is to practice ReactJs skills.

## Grading Rubric

### 30 points on functionality

- App should be responsive and attractive with decent user interface

### 30 points on technical specifications

- Technical specifications should be met.
- Point for each spec = 30 / number of specs

### 30 points on code quality

- A DRY code.
- Use of appropriate design patterns.
- Use of proper spaces and indentation.
- Use of best practices.

### 10 points on presentation

- Clear, concise and succinct project presentation.

## Bonus points and stretch goals

### 10 points for a blog/vlog

- Write a blog/vlog published on your personal website or any blog/vlog site about how you built your project. Must be accessible from the public internet.

### 10 points for deploying

- As a user, I can access your website from the public internet.

## Submitting

Submissions must be made via a Merge Request from a branch called `p1-react-ecommerce-app`.

**Add the link to your Trello board in the Merge Request's description.**

_Note: Remember to git add, git commit and git push regularly._

## Resources

- [How to deploy React Apps in less than 30 Seconds](https://www.netlify.com/blog/2016/07/22/deploy-react-apps-in-less-than-30-seconds/)

          {selectedProduct && (
            <div className="Product-Details">
              <h2>{selectedProduct.title}</h2>
              <img src={selectedProduct.image} width="100px" />
              <h5> {selectedProduct.title}</h5>
              <p>
                {selectedProduct.description} <br />
                <FontAwesomeIcon icon={faPesoSign} />
                {selectedProduct.price} <br />
                <FontAwesomeIcon icon={faStar} />
                {selectedProduct.rating.rate} <br />
                <FontAwesomeIcon icon={faTruck} />
                {selectedProduct.rating.count}{" "}
              </p>
              <button onClick={() => setSelectedProduct(null)}>Close</button>
            </div>
          )}
        </div>
