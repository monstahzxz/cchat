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
[Personal Background](https://drive.google.com/open?id=1gVAS8O0uOBtDJWe9W4waGLib3jxqKA9E)

## Code Challenge Solution (github repo)
[An object detector implementation](https://github.com/monstahzxz/caMicroscope_demo)

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
    * Phase 1 model completed. Now, start focusing more on writing tests.
  * <b> July 9 - July 13</b>
    * Start writing tests for unit testing and integration testing.
    * Metric evaluation, pipeline efficiency, etc.
  * <b> July 13 - July 17</b>
    * Test results are provided to mentors for evaluation.
    * Based on mentors' feedbacks, model architecture, pipeline framework, etc can be changed accordingly.
  * <b> July 17 - 21</b>
    * Make changes to model architecture (optional).
    * Make changes in user inputs or scope of options provided.
    * Adapt system to produce real-time bounding boxes.
  * <b> July 21 - 31</b>
    * Final 10 days can be fully dedicated to testing, feedback, etc with the help of mentors.
  * <b> July 31</b>
    * Phase 2 evaluation
* <b>Project Completion, testing, and documentation</b> (August 1 - August 31)
  * <b> August 1 - 5</b>
    * As part of the project completion, any work left is taken up
    * Guidance from mentors.
  * <b> August 5 - 9</b>
    * Final development changes are made.
    * Final testing is taken up.
  * <b> August 9 - 13</b>
    * If testing reveals any problem, development changes are again taken up.
    * Mentors can give feedback
    * Development is concluded.
  * <b> August 13 - 17</b>
    * Documentation work begins
    * Documentation standards are decided with the help of mentors
    * Split of dev-test documentation styles.
  * <b> August 17 - 21</b>
    * For every step taken in development phase, timelines are documented.
    * Inintial models used, accuracies, metrics.
    * Comparison between newer models (if models changed)
  * <b> August 21 - 24</b>
    * Document the use cases
    * Clear documentation of how to use pipelines.
    * Clear documentation of API endpoints.
  * <b> August 24 - 31</b>
    * Final week.
    * Discussion with mentors.
    * Project finalisation.

## Planned GSoC Work Hours
* <b>Timezone</b>: IST (GMT +05:30)
* <b>Work hours</b>: 6 hours daily.
* <b>Preferred work hours</b>: 6pm - 12am (I can dedicate during other timings as well, if required)

## Planned absence/vacation days and other commitments during the GSoC period (including the community bonding period)
* I will be having my university examinations in the month of May 2020. But, I would want to work on the project paralelly as well (as much as I can).
* After my exams, I will be working as a software enginer. I love to do open source work, so no conflicts will occur due to this.

## Skill Set
* <b> Personal Works</b>
  * [FyndML ML Challenge 2019 Entry](https://github.com/monstahzxz/fyndML) - An open competition by [fyndML](https://www.fynd.com/) aimed at automating the identification of footwear closure types.
  * [Microsoft AI Challenge 2018](https://github.com/monstahzxz/Microsoft-AI-Challenge-2018) - An open competition by <b>Microsoft</b> to build models for the task of [Machine Reading Comprehension](https://www.microsoft.com/en-us/research/project/machine-reading-comprehension/). I was fortunate enough to be selected as a finalist in this competition. [Certificate](https://github.com/monstahzxz/Microsoft-AI-Challenge-2018/blob/master/Cert/Microsoft_AI_Challenge_Certificate_Saran_Prasad.jpg)
  * [APTOS Blindness Detection Challenge](https://www.kaggle.com/c/aptos2019-blindness-detection) - A challenge to solve the problem of detection of [diabetic retinopathy](https://www.nei.nih.gov/learn-about-eye-health/eye-conditions-and-diseases/diabetic-retinopathy).

* <b> Certifications</b>
  * Deep Learning Specialisation (deeplearning.ai) - [Certificate](https://coursera.org/share/4998bc657c40f2e747274c6b739147ec)
  * Machine Learning (Stanford Online) - [Certificate](https://coursera.org/share/7c93ab83621d8e2668612bb1e82d96ec)
* <b> Skill set</b>
  * Deep Learning
  * Competitive Coding
  * Full Stack Developer
  * Tensorflow/Keras
  * Node.js
  * Angular
