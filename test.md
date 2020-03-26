# Google Summer of Code 2020 Proposal

## Project Title
Cancer Region of Interest Extraction and Machine Learning

## Abstract / Project Summary
The proposed project aims to build a system to extract <b>Region of Interest (RoI)</b> from images based on user-selected class groups. Currently, the pipeline supports for a single-stage CNN network which only outputs the results (classes) when given an input image, which makes it difficult to use these results in other models. The proposal is to adapt the CNN to fetch <b>patches of regions</b> from the image that belong to a particular class and send back the positive class patches through the pipeline making it easy for other models to work on top of the results.

## Student Name
Saran Prasad

## Student Email and Slack username
* Email: saranprasad97@gmail.com
* Slack username: m0nstah

## Potential Mentors
Insiyah Hajoori and Ryan Birmingham

## Personal Background
Please find my details in the link below </br>
https://drive.google.com/open?id=1gVAS8O0uOBtDJWe9W4waGLib3jxqKA9E

## Project Goals / Major Contributions
* Gathering relevant issues related to existing workflow and integrations
* Re-design the single-stage network to adapt to detection of RoI tasks with respect to gathered issues as well.
  * <b>Issues</b>
    1. The current network outputs the results directly without any bounding boxes.
    2. A solution would be to create a two-stage network which would first create patches of fixed size and pass them to the CNN for predicting classes. But, this may be computationally infeasible.
    3. Integration with other entities in pipeline
  * <b>Solution proposals</b>
    1. The network should be designed to adapt as an object detector which predicts both bounding boxes as well as classes.
    2. The idea of a two-stage CNN can be feasibly implemented as a single-pass network by a model strategy referenced in the following paper: [OverFeat: Integrated Recognition, Localization and Detection using Convolutional Networks](https://arxiv.org/abs/1312.6229)
    3. With proper guidance from my mentors, the newly proposed model can be implemented within the existing pipeline workflow
* Implementation of the design after my mentors accept it.
  * <b>Functions</b>
    1. The object detector (RoI extractor) can be implemented by using the idea from the paper mentioned above (OverFeat paper). The proposed object detector also has to work in real-time. Architectural models like YOLO ([You Only Look Once](https://arxiv.org/abs/1506.02640)) follows these tricks to feasibly compute patches corresponding to RoIs.
    2. The existing <b>input</b> pipeline may need to be slightly changed so as to accomodate the user inputs such as user-selected class groups. 
    3. The existing <b>output</b> pipeline consists of results (classes). This needs to be updated to suite the feature of sending bounding boxes of the extracted RoIs. As the project details indicate that the download of areas in an image given a bounding box is currently supported, we can easily adapt the output pipeline change.
    4. Any pre-processing or post-processing of images/features can also be done under the system. This is to address the need to pass these results to other models as well.
* Unit testing and integration testing
  * Models are to be evaluated using metrics that are required by the project. Metrics include <b>IoU (Intersection over Union)</b>, etc.
  * As the models are only part of the pipeline, integration testing is done. This includes testing of the corresponding <b>API endpoints</b> with the newly updated input and output standards developed.
    * NOTE: Integration testing tests the flow from user input images (<b>slides</b>) and user options to retrieval of corresponding <b>RoIs</b> as patches.

## Project Schedule
* <b>Community Bonding Period</b> (May 5 - June 1)
  * I consider this as a very big opportunity to meet mentors and contributors. This will help me build a good understanding of the documentations, workflows and standards that are followed. It would help me gear up faster for the upcoming development phase.
* <b>Development Phase</b> (June 1 - June 31)
  * <b>June 1 - 5</b>
    * Evaluation of current existing pipelines. (APIs involved, models being used, input/output formats). This would clear up which part of the pipeline I am handling and help me in the design process.
  * <b>June 5 - 8</b>
    * Begin design of pipeline
  * <b> June 8 - 10</b>
    * Get feedback from mentors on the design
  * <b> June 10 - 12</b>
    * Make changes to design if any, and finalise
  * <b> June 12 - 16</b>
    * Setting up development environment
    * Updation in input and output formats. Specifically, adjust input to accomodate user-selected groups and to adapt output to support bounding box results with the help of existing download patches feature.
  * <b> June 16 - 18</b>
    * Get review from mentors on updation to API input and outputs. (Changes made to API endpoint)
    * Pull changes
  * <b> June 18 - 22</b>
    * Start working on existing model. (Change into object detector with proposed strategies in Project Goals section)
    * Choosing toolkit and prototyping model architecture
  * <b> June 22 - 24</b>
    * Review from mentors on model architecture and technologies.
    * Make changes if any
  * <b> June 24 - 28</b>
    * Implementation of proposed model
    * Integration of model with already changes input/output framework.
  * <b> June 28 - 29</b>
    * Final changes
  * <b> June 29 - July 3</b>
    * Phase 1 evaluation
    * Get valuable feedback from mentors on the work completed till now
  * <b> July 4 - July 9</b>
    * Phase 1 model completed. Now, start focusing more on tests.
  * <b> July 9 - July 13</b>
    * Unit testing of model will provide in-sight into short comings of model if any.
    * Integration testing will reveal optimisation options.
  * <b> July 13 - July 17</b>
    * Test results are provided to mentors for evaluation.
    * Based on mentors' feedbacks, model architecture, pipeline framework, etc can be changed accordingly.
  * <b> July 17 - 21</b>
    * Make further changes if any
  * <b> July 21 - 31</b>
    * Final 10 days can be fully dedicated to testing, feedback, etc with the help of mentors.
  
