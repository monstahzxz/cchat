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
    2. The existing <b>input</b> pipeline might have slight changes as to accomodate the user input such as user-selected class groups. 
    3. The existing <b>output</b> pipeline consists of results (classes). This needs to be updated to suite the feature of sending bounding boxes of the extracted RoIs. As the project details indicate that the download of areas in an image given a bounding box is currently supported, we can easily adapt the output pipeline change.
    4. Any pre-processing or post-processing of images/features can also be done under the system.
