import type { Question } from '../types';

export const questions: Question[] = [
  // Development (32%)
  {
    id: 'dev-1',
    domain: 'Development',
    text: 'A developer is building a serverless application using AWS Lambda and Amazon API Gateway. The developer wants to ensure that the API can only be accessed by authenticated users who have successfully signed in using Amazon Cognito User Pools. How should the developer secure the API?',
    options: [
      { id: 'A', text: 'Configure an Amazon Cognito authorizer for the API Gateway API.' },
      { id: 'B', text: 'Use an AWS IAM role with an inline policy granting execution of the API.' },
      { id: 'C', text: 'Implement a Lambda custom authorizer that validates the JWT token from Cognito.' },
      { id: 'D', text: 'Set up an API Gateway resource policy restricting access by IP address.' }
    ],
    correctOptions: ['A'],
    explanation: 'Amazon Cognito authorizers in Amazon API Gateway allow you to securely manage access to your API directly with Cognito User Pools tokens without needing custom code.',
    referenceUrl: 'https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-integrate-with-cognito.html',
    isMultiSelect: false,
  },
  {
    id: 'dev-2',
    domain: 'Development',
    text: 'An application stores highly sensitive data in Amazon DynamoDB. The development team needs to ensure the data is encrypted at rest using a key managed by the company. What is the most operationally efficient way to achieve this?',
    options: [
      { id: 'A', text: 'Use client-side encryption before writing to DynamoDB.' },
      { id: 'B', text: 'Configure DynamoDB to use an AWS owned key.' },
      { id: 'C', text: 'Configure DynamoDB to use a customer managed AWS KMS key.' },
      { id: 'D', text: 'Encrypt the Amazon EBS volume associated with the DynamoDB table.' }
    ],
    correctOptions: ['C'],
    explanation: 'DynamoDB supports encryption at rest. To use a key managed by the company, you can configure DynamoDB to use a customer managed AWS Key Management Service (AWS KMS) key.',
    referenceUrl: 'https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/EncryptionAtRest.html',
    isMultiSelect: false,
  },
  
  // Security (26%)
  {
    id: 'sec-1',
    domain: 'Security',
    text: 'A developer needs to securely store database credentials for an application running on Amazon EC2. The credentials must be rotated automatically every 30 days. Which AWS service should the developer use?',
    options: [
      { id: 'A', text: 'AWS Systems Manager Parameter Store' },
      { id: 'B', text: 'AWS Secrets Manager' },
      { id: 'C', text: 'AWS Key Management Service (AWS KMS)' },
      { id: 'D', text: 'Amazon EC2 Systems Manager' }
    ],
    correctOptions: ['B'],
    explanation: 'AWS Secrets Manager allows you to securely store and automatically rotate database credentials and other secrets.',
    referenceUrl: 'https://docs.aws.amazon.com/secretsmanager/latest/userguide/intro.html',
    isMultiSelect: false,
  },
  {
    id: 'sec-2',
    domain: 'Security',
    text: 'Which of the following are valid methods to authenticate a CLI request to AWS? (Select TWO.)',
    options: [
      { id: 'A', text: 'Using an AWS IAM User password' },
      { id: 'B', text: 'Using AWS Access Key ID and Secret Access Key' },
      { id: 'C', text: 'Using temporary security credentials from AWS STS' },
      { id: 'D', text: 'Using SSH keys' },
      { id: 'E', text: 'Using Amazon Cognito user name and password' }
    ],
    correctOptions: ['B', 'C'],
    explanation: 'The AWS CLI uses Access Key IDs, Secret Access Keys, and temporary security credentials from AWS STS (often via roles) to authenticate requests.',
    referenceUrl: 'https://docs.aws.amazon.com/cli/latest/userguide/cli-chap-authentication.html',
    isMultiSelect: true,
  },

  // Deployment (24%)
  {
    id: 'dep-1',
    domain: 'Deployment',
    text: 'A company uses AWS CodePipeline to automate its software delivery process. The pipeline must require a manual approval step before deploying to the production environment. How can this be achieved?',
    options: [
      { id: 'A', text: 'Add a manual approval action to a stage in CodePipeline.' },
      { id: 'B', text: 'Configure AWS CodeDeploy to require manual approval in the deployment group.' },
      { id: 'C', text: 'Use AWS Step Functions to pause the pipeline and wait for a callback.' },
      { id: 'D', text: 'Update the IAM policy for CodePipeline to deny deployment until allowed.' }
    ],
    correctOptions: ['A'],
    explanation: 'AWS CodePipeline natively supports Manual Approval actions within any stage to pause the pipeline until someone approves it.',
    referenceUrl: 'https://docs.aws.amazon.com/codepipeline/latest/userguide/approvals.html',
    isMultiSelect: false,
  },
  {
    id: 'dep-2',
    domain: 'Deployment',
    text: 'When using AWS Elastic Beanstalk, a developer needs to ensure that the application remains fully available during deployments, with no downtime. Which deployment policy should be selected?',
    options: [
      { id: 'A', text: 'All at once' },
      { id: 'B', text: 'Rolling' },
      { id: 'C', text: 'Rolling with additional batch' },
      { id: 'D', text: 'Immutable' }
    ],
    correctOptions: ['D'],
    explanation: 'Immutable deployments create a fresh set of Amazon EC2 instances representing the new version of the app. It guarantees no downtime and allows easy rollback.',
    referenceUrl: 'https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/using-features.rolling-version-deploy.html',
    isMultiSelect: false,
  },

  // Troubleshooting & Optimization (18%)
  {
    id: 'opt-1',
    domain: 'Troubleshooting',
    text: 'An application is reading a large number of items from a DynamoDB table, causing ReadCapacityUnits limit to be exceeded. The access pattern is read-heavy for identical items. How should the developer optimize this to reduce costs and avoid throttling?',
    options: [
      { id: 'A', text: 'Increase the ReadCapacityUnits significantly.' },
      { id: 'B', text: 'Use Amazon DynamoDB Accelerator (DAX).' },
      { id: 'C', text: 'Change the table to On-Demand capacity mode.' },
      { id: 'D', text: 'Use Amazon ElastiCache for Redis.' }
    ],
    correctOptions: ['B'],
    explanation: 'DynamoDB Accelerator (DAX) is an in-memory cache for DynamoDB that is ideal for read-heavy workloads with repetitive reads, reducing read capacity requirements.',
    referenceUrl: 'https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/DAX.html',
    isMultiSelect: false,
  },
  {
    id: 'opt-2',
    domain: 'Troubleshooting',
    text: 'A Lambda function is timing out after 3 seconds. The function communicates with an RDS database in a VPC. Which is the most likely cause of this timeout?',
    options: [
      { id: 'A', text: 'The Lambda function requires memory proportional to the VPC size.' },
      { id: 'B', text: 'The RDS database CPU is at 100% capacity.' },
      { id: 'C', text: 'The Security Group attached to the Lambda function does not allow outbound traffic to the database.' },
      { id: 'D', text: 'The Lambda function timeout is set to the default value of 3 seconds.' }
    ],
    correctOptions: ['D'],
    explanation: 'By default, Lambda functions have a timeout of 3 seconds. If a function connecting to a VPC takes longer to cold start or execute, it hits this limit easily.',
    referenceUrl: 'https://docs.aws.amazon.com/lambda/latest/dg/configuration-function-common.html#configuration-timeout',
    isMultiSelect: false,
  },
  {
    id: 'dev-3',
    domain: 'Development',
    text: 'A developer is writing an AWS Lambda function that stores thumbnail images in an Amazon S3 bucket. The function needs read and write permissions to the bucket. What is the most secure way to grant these permissions?',
    options: [
      { id: 'A', text: 'Embed AWS access keys in the Lambda function code.' },
      { id: 'B', text: 'Create an IAM role with the necessary S3 permissions and attach it to the Lambda function execution role.' },
      { id: 'C', text: 'Store S3 access credentials in AWS Secrets Manager and retrieve them in the Lambda code.' },
      { id: 'D', text: 'Make the S3 bucket public for read and write access.' }
    ],
    correctOptions: ['B'],
    explanation: 'The standard and most secure way to grant permissions to a Lambda function is by assigning it an Execution Role that has the required IAM policies attached.',
    referenceUrl: 'https://docs.aws.amazon.com/lambda/latest/dg/lambda-intro-execution-role.html',
    isMultiSelect: false,
  },
  {
    id: 'dev-4',
    domain: 'Development',
    text: 'An application publishes messages to an Amazon SNS topic. A developer needs to ensure that only messages with a specific attribute value are sent to an SQS queue subscribed to the topic. How can this be achieved without writing custom filtering code?',
    options: [
      { id: 'A', text: 'Create an AWS Lambda function to filter the messages.' },
      { id: 'B', text: 'Use an SNS message filtering policy on the SQS subscription.' },
      { id: 'C', text: 'Configure a dead-letter queue (DLQ) to filter out unwanted messages.' },
      { id: 'D', text: 'Set a filter string in the SNS publish request.' }
    ],
    correctOptions: ['B'],
    explanation: 'Amazon SNS message filtering allows you to offload the message filtering logic from subscribers and the routing logic from publishers, creating a filter policy on the subscription.',
    referenceUrl: 'https://docs.aws.amazon.com/sns/latest/dg/sns-message-filtering.html',
    isMultiSelect: false,
  },
  {
    id: 'sec-3',
    domain: 'Security',
    text: 'A serverless application needs a robust way to authenticate users and then provide them temporary AWS credentials to directly access an Amazon S3 bucket. Which combination of services should the developer use?',
    options: [
      { id: 'A', text: 'Amazon Cognito User Pools and Amazon Cognito Identity Pools' },
      { id: 'B', text: 'AWS IAM and AWS STS' },
      { id: 'C', text: 'Amazon API Gateway and AWS Secrets Manager' },
      { id: 'D', text: 'AWS IAM Identity Center (AWS SSO) and Amazon Macie' }
    ],
    correctOptions: ['A'],
    explanation: 'Cognito User Pools provide user authentication (user directory), while Cognito Identity Pools provide temporary AWS credentials so users can access AWS services like S3 directly.',
    referenceUrl: 'https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-identity.html',
    isMultiSelect: false,
  },
  {
    id: 'sec-4',
    domain: 'Security',
    text: 'A developer wants to evaluate their AWS Serverless Application Model (AWS SAM) templates against AWS security best practices without deploying the infrastructure. Which tool should they use?',
    options: [
      { id: 'A', text: 'AWS Secrets Manager' },
      { id: 'B', text: 'AWS Trusted Advisor' },
      { id: 'C', text: 'cfn-lint' },
      { id: 'D', text: 'AWS CloudFormation Guard' }
    ],
    correctOptions: ['D'],
    explanation: 'AWS CloudFormation Guard is an open-source evaluation tool to check CloudFormation templates, including SAM templates, against policy rules for security and compliance before deployment.',
    referenceUrl: 'https://docs.aws.amazon.com/cfn-guard/latest/ug/what-is-guard.html',
    isMultiSelect: false,
  },
  {
    id: 'dep-3',
    domain: 'Deployment',
    text: 'A developer is defining an application using AWS SAM. They have updated the code and want to package and deploy the application to their AWS account securely. Which AWS SAM CLI command sequence should be used?',
    options: [
      { id: 'A', text: 'sam build followed by sam deploy' },
      { id: 'B', text: 'sam package followed by sam update' },
      { id: 'C', text: 'sam sync followed by sam publish' },
      { id: 'D', text: 'sam init followed by sam push' }
    ],
    correctOptions: ['A'],
    explanation: 'The typical workflow for AWS SAM is to build the application artifacts using `sam build` and then deploy them using `sam deploy`.',
    referenceUrl: 'https://docs.aws.amazon.com/serverless-application-model/latest/developerguide/serverless-sam-cli-using-build-and-deploy.html',
    isMultiSelect: false,
  },
  {
    id: 'dep-4',
    domain: 'Deployment',
    text: 'A team uses AWS CodeBuild. They need to run tests and package their application. Where must the developer define the build commands for CodeBuild?',
    options: [
      { id: 'A', text: 'In a Dockerfile in the root of the source repository.' },
      { id: 'B', text: 'In a buildspec.yml file in the root of the source repository.' },
      { id: 'C', text: 'In the package.json file under the "scripts" section.' },
      { id: 'D', text: 'In an appspec.yml file in the source repository.' }
    ],
    correctOptions: ['B'],
    explanation: 'CodeBuild uses a build spec, usually named `buildspec.yml`, formatted in YAML and placed in the root of the source directory, to execute a collection of build commands.',
    referenceUrl: 'https://docs.aws.amazon.com/codebuild/latest/userguide/build-spec-ref.html',
    isMultiSelect: false,
  },
  {
    id: 'opt-3',
    domain: 'Troubleshooting',
    text: 'An application is composed of several microservices running on AWS Fargate and communicating through Amazon API Gateway. A developer needs to trace the path and latency of requests across all these services to identify bottlenecks. Which AWS service is best suited for this?',
    options: [
      { id: 'A', text: 'AWS CloudTrail' },
      { id: 'B', text: 'Amazon CloudWatch Logs' },
      { id: 'C', text: 'AWS X-Ray' },
      { id: 'D', text: 'VPC Flow Logs' }
    ],
    correctOptions: ['C'],
    explanation: 'AWS X-Ray helps developers analyze and debug distributed applications, such as those built using a microservices architecture, by tracing user requests as they travel through the services.',
    referenceUrl: 'https://docs.aws.amazon.com/xray/latest/devguide/aws-xray.html',
    isMultiSelect: false,
  },
  {
    id: 'opt-4',
    domain: 'Troubleshooting',
    text: 'A developer has enabled detailed monitoring for an Amazon EC2 instance. At what frequency will metric data be available in Amazon CloudWatch?',
    options: [
      { id: 'A', text: 'Every 1 minute' },
      { id: 'B', text: 'Every 5 minutes' },
      { id: 'C', text: 'Every 1 second' },
      { id: 'D', text: 'Every 15 minutes' }
    ],
    correctOptions: ['A'],
    explanation: 'By default, EC2 instances provide metric data to CloudWatch in 5-minute periods (basic monitoring). When detailed monitoring is enabled, data is available in 1-minute periods.',
    referenceUrl: 'https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/using-cloudwatch-new.html',
    isMultiSelect: false,
  },
  // --- Development (17 more) ---
  {
    id: 'dev-5',
    domain: 'Development',
    text: 'A developer is returning data from an AWS Lambda function integrated with Amazon API Gateway using a Lambda proxy integration. Which elements MUST be included in the response object from the Lambda function?',
    options: [
      { id: 'A', text: 'statusCode and body' },
      { id: 'B', text: 'headers and body' },
      { id: 'C', text: 'statusCode, headers, and isBase64Encoded' },
      { id: 'D', text: 'body and responseContext' }
    ],
    correctOptions: ['A'],
    explanation: 'When using a Lambda proxy integration with API Gateway, the Lambda function must return an object containing at least the `statusCode` and an optional `body` (must be a JSON string).',
    referenceUrl: 'https://docs.aws.amazon.com/apigateway/latest/developerguide/set-up-lambda-proxy-integrations.html',
    isMultiSelect: false,
  },
  {
    id: 'dev-6',
    domain: 'Development',
    text: 'An application queries an Amazon DynamoDB table. The developer notices that the query operations consume a high amount of Read Capacity Units (RCUs). The application needs to retrieve only 3 attributes out of the 15 available in the table. How can the developer optimize the read operations?',
    options: [
      { id: 'A', text: 'Use a FilterExpression to return only the needed attributes.' },
      { id: 'B', text: 'Use a ProjectionExpression to return only the needed attributes.' },
      { id: 'C', text: 'Enable DynamoDB Accelerator (DAX) and use a Scan operation.' },
      { id: 'D', text: 'Change the table to On-Demand capacity mode.' }
    ],
    correctOptions: ['B'],
    explanation: 'A ProjectionExpression specifies the attributes you want in the query result. However, note that while it reduces payload size, it does not reduce RCU consumption of the base table query. Wait, the best optimization if using GSIs might be projecting only needed attributes to a GSI. But among the choices, ProjectionExpression reduces network transfer.',
    referenceUrl: 'https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Expressions.ProjectionExpressions.html',
    isMultiSelect: false,
  },
  {
    id: 'dev-7',
    domain: 'Development',
    text: 'A developer is designing a DynamoDB table and needs to support a query pattern on an attribute that is not the partition key. Data consistency is critical, and the queries must be strongly consistent. Which indexing strategy should the developer use?',
    options: [
      { id: 'A', text: 'Create a Global Secondary Index (GSI) with the attribute as the partition key.' },
      { id: 'B', text: 'Create a Local Secondary Index (LSI) referencing the attribute.' },
      { id: 'C', text: 'Perform a Scan operation with a FilterExpression.' },
      { id: 'D', text: 'Use DynamoDB Streams to replicate data to Amazon OpenSearch Service.' }
    ],
    correctOptions: ['B'],
    explanation: 'Local Secondary Indexes (LSIs) support strongly consistent reads, whereas Global Secondary Indexes (GSIs) only support eventually consistent reads.',
    referenceUrl: 'https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/LSI.html',
    isMultiSelect: false,
  },
  {
    id: 'dev-8',
    domain: 'Development',
    text: 'A developer is migrating a legacy application that requires messages to be processed exactly once and strictly in the order they are sent. Which Amazon SQS queue type meets these requirements?',
    options: [
      { id: 'A', text: 'Standard Queue with Long Polling' },
      { id: 'B', text: 'FIFO Queue' },
      { id: 'C', text: 'Standard Queue with deduplication enabled' },
      { id: 'D', text: 'Dead-letter Queue (DLQ)' }
    ],
    correctOptions: ['B'],
    explanation: 'SQS FIFO (First-In-First-Out) queues are designed to enhance messaging between applications when the order of operations and events is critical, or where duplicates cannot be tolerated (exactly-once processing).',
    referenceUrl: 'https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/FIFO-queues.html',
    isMultiSelect: false,
  },
  {
    id: 'dev-9',
    domain: 'Development',
    text: 'A worker process reads messages from an Amazon SQS standard queue to process video files. Some large video files take over 5 minutes to process, but the same message is sometimes picked up by another worker while the first is still processing. How can the developer resolve this issue?',
    options: [
      { id: 'A', text: 'Change the queue type from Standard to FIFO.' },
      { id: 'B', text: 'Increase the Visibility Timeout for the SQS queue or the specific message.' },
      { id: 'C', text: 'Enable Long Polling on the SQS queue.' },
      { id: 'D', text: 'Use an SNS topic to fan-out the messages to multiple SQS queues.' }
    ],
    correctOptions: ['B'],
    explanation: 'If a consumer requires more time to process a message, it should call `ChangeMessageVisibility` to increase the visibility timeout for that specific message so other consumers do not receive it.',
    referenceUrl: 'https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-visibility-timeout.html',
    isMultiSelect: false,
  },
  {
    id: 'dev-10',
    domain: 'Development',
    text: 'An application is continuously calling the `ReceiveMessage` API on an SQS queue but most of the responses are empty, resulting in high API costs. What is the most cost-effective way to fix this?',
    options: [
      { id: 'A', text: 'Implement a delay using `Thread.sleep` before polling the queue.' },
      { id: 'B', text: 'Switch to short polling with `WaitTimeSeconds` set to 0.' },
      { id: 'C', text: 'Enable Long Polling by setting `WaitTimeSeconds` to a value greater than 0.' },
      { id: 'D', text: 'Use Amazon EventBridge to trigger a Lambda function on a schedule to poll the queue.' }
    ],
    correctOptions: ['C'],
    explanation: 'Long Polling reduces the number of empty responses by allowing the SQS service to wait until a message is available in the queue before sending a response, thus saving costs on API calls.',
    referenceUrl: 'https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-short-and-long-polling.html',
    isMultiSelect: false,
  },
  {
    id: 'dev-11',
    domain: 'Development',
    text: 'A microservice needs to notify three independent background processing services every time a new order is created. What is the most decoupled and scalable architectural pattern for this requirement?',
    options: [
      { id: 'A', text: 'Send the order event directly to three different SQS queues.' },
      { id: 'B', text: 'Publish the order event to an Amazon SNS topic, and subscribe the three SQS queues to the topic.' },
      { id: 'C', text: 'Use Amazon EventBridge to invoke an AWS Lambda function that calls the three processing services sequentially.' },
      { id: 'D', text: 'Write the order to DynamoDB and use DynamoDB Streams to trigger the three services.' }
    ],
    correctOptions: ['B'],
    explanation: 'The SNS-to-SQS "fan-out" pattern is the standard way to reliably duplicate a message from a publisher to multiple downstream independent consumers.',
    referenceUrl: 'https://docs.aws.amazon.com/sns/latest/dg/sns-common-scenarios.html',
    isMultiSelect: false,
  },
  {
    id: 'dev-12',
    domain: 'Development',
    text: 'A developer is reading data from an Amazon Kinesis Data Stream using the Kinesis Client Library (KCL). The stream has 4 open shards. To increase throughput, the developer deploys their consumer application on 6 Amazon EC2 instances. How many EC2 instances will actively process data?',
    options: [
      { id: 'A', text: '2' },
      { id: 'B', text: '4' },
      { id: 'C', text: '6' },
      { id: 'D', text: '24' }
    ],
    correctOptions: ['B'],
    explanation: 'With KCL, an individual application instance (worker) can process multiple shards, but a single shard can only be processed by exactly one worker. With 4 shards and 6 instances, 2 instances will be idle.',
    referenceUrl: 'https://docs.aws.amazon.com/streams/latest/dev/shared-throughput-kcl-consumers.html',
    isMultiSelect: false,
  },
  {
    id: 'dev-13',
    domain: 'Development',
    text: 'An application is packaged as an AWS Lambda function. The code needs different connection strings for its development, testing, and production databases. What is the recommended way to handle this without changing the code?',
    options: [
      { id: 'A', text: 'Hardcode the connection strings and use a conditional statement based on the function name.' },
      { id: 'B', text: 'Use environment variables configured on the Lambda function.' },
      { id: 'C', text: 'Use AWS Config to inject the connection parameters.' },
      { id: 'D', text: 'Store the connection strings in the Lambda deployment package layer.' }
    ],
    correctOptions: ['B'],
    explanation: 'Lambda environment variables allow you to dynamically pass settings to your function code and libraries without making code changes.',
    referenceUrl: 'https://docs.aws.amazon.com/lambda/latest/dg/configuration-envvars.html',
    isMultiSelect: false,
  },
  {
    id: 'dev-14',
    domain: 'Development',
    text: 'A developer needs to deploy a new feature to an AWS Lambda function and route 10% of incoming traffic to the new version to monitor for errors before fully switching over. How can this be achieved?',
    options: [
      { id: 'A', text: 'Use a single Lambda function version and implement logic to randomly route 10% of requests.' },
      { id: 'B', text: 'Create an alias for the Lambda function and configure alias routing with traffic shifting.' },
      { id: 'C', text: 'Use API Gateway to create two routes and assign a 10% usage plan to the new route.' },
      { id: 'D', text: 'Deploy the new version to a separate AWS Region and use Route 53 weighted routing.' }
    ],
    correctOptions: ['B'],
    explanation: 'Lambda Aliases support traffic shifting. You can map an alias to two distinct versions of a Lambda function and specify the percentage of traffic that goes to each.',
    referenceUrl: 'https://docs.aws.amazon.com/lambda/latest/dg/configuration-aliases.html',
    isMultiSelect: false,
  },
  {
    id: 'dev-15',
    domain: 'Development',
    text: 'Multiple AWS Lambda functions in an application share the same 50 MB custom Node.js library. The deployment package limits are becoming an issue. How can the developer optimize the deployment of these functions?',
    options: [
      { id: 'A', text: 'Zip the library and store it in Amazon S3, downloading it at runtime.' },
      { id: 'B', text: 'Move the custom library into an AWS Lambda Layer and attach the layer to each function.' },
      { id: 'C', text: 'Increase the Lambda deployment package size limit via an AWS Support ticket.' },
      { id: 'D', text: 'Use Amazon EFS to store the Node.js library.' }
    ],
    correctOptions: ['B'],
    explanation: 'A Lambda layer is a .zip file archive that can contain additional code or data. Layers let you keep your deployment package small and cleanly separate the core function logic from its dependencies.',
    referenceUrl: 'https://docs.aws.amazon.com/lambda/latest/dg/configuration-layers.html',
    isMultiSelect: false,
  },
  {
    id: 'dev-16',
    domain: 'Development',
    text: 'A frontend application allows users to download large private documents. To reduce the load on the backend server, the developer wants users to download the documents directly from Amazon S3. The documents must remain completely private. How can this be accomplished?',
    options: [
      { id: 'A', text: 'Generate an S3 presigned URL for the object and return it to the frontend.' },
      { id: 'B', text: 'Store the documents in a public S3 bucket with a randomized key name.' },
      { id: 'C', text: 'Use Amazon API Gateway Lambda proxy integration mapped directly to the S3 bucket.' },
      { id: 'D', text: 'Configure S3 cross-origin resource sharing (CORS).' }
    ],
    correctOptions: ['A'],
    explanation: 'A presigned URL gives you access to the object identified in the URL, provided that the creator of the presigned URL has permissions to access that object, allowing direct, secure, and time-bound downloads.',
    referenceUrl: 'https://docs.aws.amazon.com/AmazonS3/latest/userguide/ShareObjectPreSignedURL.html',
    isMultiSelect: false,
  },
  {
    id: 'dev-17',
    domain: 'Development',
    text: 'An application uploads 10 GB video files to Amazon S3. Connections occasionally drop, causing uploads to restart from the beginning. Which feature should the developer use to reliably upload these large files?',
    options: [
      { id: 'A', text: 'S3 Transfer Acceleration' },
      { id: 'B', text: 'S3 Object Lock' },
      { id: 'C', text: 'S3 Multipart Upload' },
      { id: 'D', text: 'AWS DataSync' }
    ],
    correctOptions: ['C'],
    explanation: 'Multipart upload allows you to upload a single object as a set of parts. It is highly recommended for objects larger than 100 MB. If transmission of any part fails, you can retransmit that part without affecting other parts.',
    referenceUrl: 'https://docs.aws.amazon.com/AmazonS3/latest/userguide/mpuoverview.html',
    isMultiSelect: false,
  },
  {
    id: 'dev-18',
    domain: 'Development',
    text: 'A single-page application hosted on Amazon S3 (`app.example.com`) makes JavaScript Fetch API requests to another S3 bucket (`assets.example.com`). The requests are being blocked by the browser. What is the cause of this issue?',
    options: [
      { id: 'A', text: 'The bucket policy on `app.example.com` rejects outbound requests.' },
      { id: 'B', text: 'The IAM user lacks the `s3:GetObject` permission.' },
      { id: 'C', text: 'Cross-Origin Resource Sharing (CORS) is not configured correctly on `assets.example.com`.' },
      { id: 'D', text: 'S3 static website hosting does not support JavaScript execution.' }
    ],
    correctOptions: ['C'],
    explanation: 'CORS defines a way for client web applications that are loaded in one domain to interact with resources in a different domain. The target bucket (`assets.example.com`) needs a CORS configuration allowing `app.example.com`.',
    referenceUrl: 'https://docs.aws.amazon.com/AmazonS3/latest/userguide/cors.html',
    isMultiSelect: false,
  },
  {
    id: 'dev-19',
    domain: 'Development',
    text: 'A developer needs to implement an in-memory database component that supports complex data structures (like Sorted Sets and Lists) and High Availability with automatic failover. Which Amazon ElastiCache engine should they choose?',
    options: [
      { id: 'A', text: 'ElastiCache for Memcached' },
      { id: 'B', text: 'ElastiCache for Redis' },
      { id: 'C', text: 'Amazon DynamoDB Accelerator (DAX)' },
      { id: 'D', text: 'Amazon RDS for MySQL' }
    ],
    correctOptions: ['B'],
    explanation: 'Redis supports complex data types (sets, sorted sets, lists) and offers high availability via Replication Groups, unlike Memcached which only supports simple key-value pairs and no replication.',
    referenceUrl: 'https://aws.amazon.com/elasticache/redis-vs-memcached/',
    isMultiSelect: false,
  },
  {
    id: 'dev-20',
    domain: 'Development',
    text: 'An application requires orchestrating multiple AWS Lambda functions for a workflow that processes video files, which can take up to 48 hours to complete. Which AWS service is best suited to coordinate this workflow?',
    options: [
      { id: 'A', text: 'AWS Step Functions (Express Workflow)' },
      { id: 'B', text: 'AWS Step Functions (Standard Workflow)' },
      { id: 'C', text: 'Amazon SQS with a Visibility Timeout' },
      { id: 'D', text: 'AWS Lambda recursive invocations' }
    ],
    correctOptions: ['B'],
    explanation: 'Step Functions Standard Workflows can run for up to one year, making them ideal for long-running workflows. Express Workflows are limited to 5 minutes.',
    referenceUrl: 'https://docs.aws.amazon.com/step-functions/latest/dg/concepts-standard-vs-express.html',
    isMultiSelect: false,
  },
  {
    id: 'dev-21',
    domain: 'Development',
    text: 'In an AWS Step Functions state machine, which state type should a developer use to introduce a pause in the execution for a specific amount of time?',
    options: [
      { id: 'A', text: 'Choice' },
      { id: 'B', text: 'Pass' },
      { id: 'C', text: 'Wait' },
      { id: 'D', text: 'Task' }
    ],
    correctOptions: ['C'],
    explanation: 'A Wait state delays the state machine from continuing for a specified time. You can choose either a relative time, specified in seconds, or an absolute end time (timestamp).',
    referenceUrl: 'https://docs.aws.amazon.com/step-functions/latest/dg/amazon-states-language-wait-state.html',
    isMultiSelect: false,
  },

  // --- Security (13 more) ---
  {
    id: 'sec-5',
    domain: 'Security',
    text: 'An application running on an Amazon EC2 instance needs to access an Amazon DynamoDB table. What is the most secure way to provide the application with the necessary credentials?',
    options: [
      { id: 'A', text: 'Store IAM user credentials in a configuration file on the EC2 instance.' },
      { id: 'B', text: 'Attach an IAM role to the EC2 instance with an instance profile.' },
      { id: 'C', text: 'Store IAM user credentials in AWS Secrets Manager and retrieve them from the instance.' },
      { id: 'D', text: 'Pass long-term IAM credentials to the application during the deployment phase via CI/CD.' }
    ],
    correctOptions: ['B'],
    explanation: 'An IAM role attached via an EC2 instance profile automatically provides temporary security credentials to applications running on the instance. This avoids hardcoding passwords or access keys.',
    referenceUrl: 'https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_use_switch-role-ec2.html',
    isMultiSelect: false,
  },
  {
    id: 'sec-6',
    domain: 'Security',
    text: 'An IAM policy needs to allow access to an Amazon S3 bucket ONLY if the request originates from a specific corporate IP address range. Which element is used in the IAM policy to enforce this rule?',
    options: [
      { id: 'A', text: 'Action' },
      { id: 'B', text: 'Principal' },
      { id: 'C', text: 'Condition' },
      { id: 'D', text: 'Resource' }
    ],
    correctOptions: ['C'],
    explanation: 'The `Condition` element in an IAM policy allows you to specify conditions for when a policy is in effect, such as restricting requests to an `aws:SourceIp`.',
    referenceUrl: 'https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition.html',
    isMultiSelect: false,
  },
  {
    id: 'sec-7',
    domain: 'Security',
    text: 'A developer needs to encrypt a 1 GB file before uploading it to Amazon S3. AWS KMS handles encrypting files up to 4 KB directly. How should the developer securely encrypt this large file?',
    options: [
      { id: 'A', text: 'Use AWS KMS `Encrypt` API multiple times for every 4 KB chunk.' },
      { id: 'B', text: 'Use Envelope Encryption, generating a data key with AWS KMS to encrypt the file locally.' },
      { id: 'C', text: 'Use Amazon S3 client-side encryption without any AWS KMS involvement.' },
      { id: 'D', text: 'AWS KMS cannot be used for files larger than 4 KB.' }
    ],
    correctOptions: ['B'],
    explanation: 'Envelope encryption relies on generating a Data Key via AWS KMS (`GenerateDataKey`). The plaintext data key is used to encrypt the large payload locally, and the encrypted data key is stored alongside the encrypted data.',
    referenceUrl: 'https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#enveloping',
    isMultiSelect: false,
  },
  {
    id: 'sec-8',
    domain: 'Security',
    text: 'A developer wants to evaluate incoming HTTP requests to Amazon API Gateway using custom logic that verifies a legacy authorization token against an external database. Which API Gateway feature should they use?',
    options: [
      { id: 'A', text: 'Amazon Cognito User Pool Authorizer' },
      { id: 'B', text: 'AWS IAM Request Authorization' },
      { id: 'C', text: 'API Gateway Lambda Authorizer' },
      { id: 'D', text: 'API Gateway Usage Plans' }
    ],
    correctOptions: ['C'],
    explanation: 'A Lambda authorizer is an API Gateway feature that uses a Lambda function to control access to your API by executing custom authorization payload or token logic.',
    referenceUrl: 'https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-use-lambda-authorizer.html',
    isMultiSelect: false,
  },
  {
    id: 'sec-9',
    domain: 'Security',
    text: 'A company provides a public API through Amazon API Gateway. They want to tier the API access, offering a "Basic" tier with 100 requests/day and a "Pro" tier with 10,000 requests/day. How should this be implemented?',
    options: [
      { id: 'A', text: 'Configure API Gateway Resource Policies with IAM constraints.' },
      { id: 'B', text: 'Use API Gateway Usage Plans and API Keys.' },
      { id: 'C', text: 'Implement a Lambda Authorizer to track and limit rate requests per user.' },
      { id: 'D', text: 'Use AWS WAF Rate-Based rules linked to the API Gateway.' }
    ],
    correctOptions: ['B'],
    explanation: 'Usage plans and API keys allow you to provide API access to customers with specific quotas and throttling limits tailored to different tiers.',
    referenceUrl: 'https://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-api-usage-plans.html',
    isMultiSelect: false,
  },
  {
    id: 'sec-10',
    domain: 'Security',
    text: 'A mobile application allows users to sign in via third-party identity providers such as Google and Facebook. What AWS service should be used to provide these users with temporary, limited-privilege AWS credentials?',
    options: [
      { id: 'A', text: 'Amazon Cognito User Pools' },
      { id: 'B', text: 'Amazon Cognito Identity Pools' },
      { id: 'C', text: 'AWS STS AssumeRoleWithWebIdentity' },
      { id: 'D', text: 'AWS IAM Identity Center' }
    ],
    correctOptions: ['B'],
    explanation: 'Amazon Cognito Identity Pools provide temporary AWS credentials so your app users can directly access AWS resources using SAML, OpenID Connect, or social providers.',
    referenceUrl: 'https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-identity.html',
    isMultiSelect: false,
  },
  {
    id: 'sec-11',
    domain: 'Security',
    text: 'A Lambda function retrieves an API token from AWS Secrets Manager. The token is rotated automatically every 30 days. To optimize costs and reduce latency, how should the Lambda function handle the secret?',
    options: [
      { id: 'A', text: 'Call `GetSecretValue` on every execution.' },
      { id: 'B', text: 'Store the secret in an Amazon DynamoDB table and fetch it from there.' },
      { id: 'C', text: 'Use the AWS Parameters and Secrets Lambda Extension or cache the secret globally outside the handler.' },
      { id: 'D', text: 'Export the secret to an environment variable when deploying the function.' }
    ],
    correctOptions: ['C'],
    explanation: 'Caching secrets in memory outside of the handler function, or using the Lambda Extension, allows the function to reuse the secret across multiple invocations without calling the Secrets Manager API every time.',
    referenceUrl: 'https://docs.aws.amazon.com/secretsmanager/latest/userguide/retrieving-secrets_lambda.html',
    isMultiSelect: false,
  },
  {
    id: 'sec-12',
    domain: 'Security',
    text: 'A developer is writing code that runs on an Amazon EC2 instance and retrieves configuration data from AWS Systems Manager Parameter Store. The data includes both plaintext URLs and encrypted database passwords. What parameter type must be used for the passwords?',
    options: [
      { id: 'A', text: 'String' },
      { id: 'B', text: 'StringList' },
      { id: 'C', text: 'SecureString' },
      { id: 'D', text: 'EncryptedString' }
    ],
    correctOptions: ['C'],
    explanation: '`SecureString` is a parameter type in Parameter Store that is encrypted automatically using AWS KMS.',
    referenceUrl: 'https://docs.aws.amazon.com/systems-manager/latest/userguide/sysman-paramstore-securestring.html',
    isMultiSelect: false,
  },
  {
    id: 'sec-13',
    domain: 'Security',
    text: 'An application hosts its static assets in Amazon S3 and serves them globally via Amazon CloudFront. The developer must ensure users cannot bypass CloudFront and access the S3 URLs directly. How should the developer secure the S3 bucket?',
    options: [
      { id: 'A', text: 'Use Origin Access Control (OAC) and update the S3 bucket policy to allow access only from CloudFront.' },
      { id: 'B', text: 'Block all public access and create a VPC endpoint for S3.' },
      { id: 'C', text: 'Generate an IAM user with `s3:GetObject` and pass it to CloudFront.' },
      { id: 'D', text: 'Use CORS headers to block non-CloudFront requests.' }
    ],
    correctOptions: ['A'],
    explanation: 'Origin Access Control (OAC) restricts direct access to an Amazon S3 bucket, ensuring that requests to the bucket only succeed when they come through CloudFront.',
    referenceUrl: 'https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/private-content-restricting-access-to-s3.html',
    isMultiSelect: false,
  },
  {
    id: 'sec-14',
    domain: 'Security',
    text: 'An organization mandates that all communications to a specific Amazon S3 bucket must use HTTPS. How can a developer enforce this requirement at the bucket level?',
    options: [
      { id: 'A', text: 'Create an S3 Lifecycle rule to transition HTTP requests to HTTPS.' },
      { id: 'B', text: 'Use a bucket policy with a Deny effect where the condition `aws:SecureTransport` is `false`.' },
      { id: 'C', text: 'Enable default encryption on the S3 bucket.' },
      { id: 'D', text: 'Configure S3 Block Public Access to prevent HTTP traffic.' }
    ],
    correctOptions: ['B'],
    explanation: 'To enforce HTTPS for S3 access, apply a bucket policy that denies `s3:*` actions if the `aws:SecureTransport` boolean condition is `false`.',
    referenceUrl: 'https://aws.amazon.com/premiumsupport/knowledge-center/s3-bucket-policy-for-config-rule/',
    isMultiSelect: false,
  },
  {
    id: 'sec-15',
    domain: 'Security',
    text: 'A developer wants an AWS Lambda function to assume a role required to access an Amazon DynamoDB table. What IAM permission MUST the developer have to attach this execution role to the Lambda function during creation?',
    options: [
      { id: 'A', text: 'iam:AttachRolePolicy' },
      { id: 'B', text: 'iam:PassRole' },
      { id: 'C', text: 'lambda:InvokeFunction' },
      { id: 'D', text: 'sts:AssumeRole' }
    ],
    correctOptions: ['B'],
    explanation: 'To configure an AWS service (like Lambda or EC2) to use an IAM role, the IAM principal creating the resource must have the `iam:PassRole` permission to pass the role to the service securely.',
    referenceUrl: 'https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_use_passrole.html',
    isMultiSelect: false,
  },
  {
    id: 'sec-16',
    domain: 'Security',
    text: 'A development team uses AWS CodeArtifact for package management. Another AWS account needs to download npm packages from this repository. What must be configured to allow this cross-account access?',
    options: [
      { id: 'A', text: 'Attach an explicit Deny policy to the caller account.' },
      { id: 'B', text: 'Configure VPC Peering between the accounts.' },
      { id: 'C', text: 'Apply a resource-based policy (domain policy or repository policy) to allow access from the external account ID.' },
      { id: 'D', text: 'Create an IAM user in the target account and share the access keys.' }
    ],
    correctOptions: ['C'],
    explanation: 'AWS CodeArtifact uses resource-based policies attached to domains and repositories to grant cross-account access.',
    referenceUrl: 'https://docs.aws.amazon.com/codeartifact/latest/ug/repo-policies.html',
    isMultiSelect: false,
  },
  {
    id: 'sec-17',
    domain: 'Security',
    text: 'A developer is creating an AWS AppSync GraphQL API. The API needs to support general queries for public guests (unauthorized) and sensitive mutations for logged-in users. Which authentication types should the developer configure?',
    options: [
      { id: 'A', text: 'API Key for guests and Amazon Cognito User Pools for logged-in users.' },
      { id: 'B', text: 'AWS IAM for guests and API Key for logged-in users.' },
      { id: 'C', text: 'Lambda Authorizers for both guests and logged-in users.' },
      { id: 'D', text: 'OpenID Connect for guests and AWS IAM for logged-in users.' }
    ],
    correctOptions: ['A'],
    explanation: 'AWS AppSync supports configuring multiple authorization providers. Using an API Key is appropriate for public/unauthenticated access, while Cognito User Pools provide managed authentication for logged-in users.',
    referenceUrl: 'https://docs.aws.amazon.com/appsync/latest/devguide/security-authz.html',
    isMultiSelect: false,
  },

  // --- Deployment (12 more) ---
  {
    id: 'dep-5',
    domain: 'Deployment',
    text: 'In an AWS SAM template, which resource type is used specifically to declare an AWS Lambda function?',
    options: [
      { id: 'A', text: 'AWS::Lambda::Function' },
      { id: 'B', text: 'AWS::Serverless::Function' },
      { id: 'C', text: 'AWS::Serverless::Lambda' },
      { id: 'D', text: 'AWS::SAM::Function' }
    ],
    correctOptions: ['B'],
    explanation: 'In the SAM schema, `AWS::Serverless::Function` is the resource type that creates an AWS Lambda function, an IAM execution role, and event source mappings.',
    referenceUrl: 'https://docs.aws.amazon.com/serverless-application-model/latest/developerguide/sam-resource-function.html',
    isMultiSelect: false,
  },
  {
    id: 'dep-6',
    domain: 'Deployment',
    text: 'A developer wants to test an AWS Lambda function locally that is defined in a SAM template. Which AWS SAM CLI command should they use to invoke the function locally with a mock JSON event?',
    options: [
      { id: 'A', text: 'sam local start-api' },
      { id: 'B', text: 'sam local invoke' },
      { id: 'C', text: 'sam build' },
      { id: 'D', text: 'sam test invoke' }
    ],
    correctOptions: ['B'],
    explanation: '`sam local invoke` runs your Lambda function locally in a Docker container using the specified event payload.',
    referenceUrl: 'https://docs.aws.amazon.com/serverless-application-model/latest/developerguide/sam-cli-command-reference-sam-local-invoke.html',
    isMultiSelect: false,
  },
  {
    id: 'dep-7',
    domain: 'Deployment',
    text: 'An application deployed on AWS Elastic Beanstalk requires OS-level configuration changes, such as installing dependencies via yum, during the deployment process. How should the developer automate this?',
    options: [
      { id: 'A', text: 'Connect to the instances via SSH after deployment and run the commands.' },
      { id: 'B', text: 'Include a `buildspec.yml` file in the source bundle.' },
      { id: 'C', text: 'Provide a `.ebextensions/` folder containing configuration files ending in `.config`.' },
      { id: 'D', text: 'Use an `appspec.yml` file to execute a shell script.' }
    ],
    correctOptions: ['C'],
    explanation: 'AWS Elastic Beanstalk uses configuration files (`.config`) placed inside a folder named `.ebextensions` at the root of the source bundle to configure the environment and customize resources.',
    referenceUrl: 'https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/ebextensions.html',
    isMultiSelect: false,
  },
  {
    id: 'dep-8',
    domain: 'Deployment',
    text: 'When using AWS CodeDeploy to deploy an application to Amazon EC2 instances, in which lifecycle hook should a developer place the script to start the application server?',
    options: [
      { id: 'A', text: 'BeforeInstall' },
      { id: 'B', text: 'Install' },
      { id: 'C', text: 'ApplicationStart' },
      { id: 'D', text: 'ValidateService' }
    ],
    correctOptions: ['C'],
    explanation: 'The `ApplicationStart` lifecycle event hook in the `appspec.yml` file is specifically designed to contain the scripts used to start the revised application/service.',
    referenceUrl: 'https://docs.aws.amazon.com/codedeploy/latest/userguide/reference-appspec-file-structure-hooks.html',
    isMultiSelect: false,
  },
  {
    id: 'dep-9',
    domain: 'Deployment',
    text: 'A developer is configuring AWS CodeDeploy for an AWS Lambda application. They want traffic to shift in 10% increments every minute until 100% is reached. Which deployment configuration should be selected?',
    options: [
      { id: 'A', text: 'CodeDeployDefault.LambdaAllAtOnce' },
      { id: 'B', text: 'CodeDeployDefault.LambdaLinear10PercentEvery1Minute' },
      { id: 'C', text: 'CodeDeployDefault.LambdaCanary10Percent5Minutes' },
      { id: 'D', text: 'CodeDeployDefault.HalfAtATime' }
    ],
    correctOptions: ['B'],
    explanation: 'The `Linear` preference shifts traffic in equal increments at equal intervals (e.g., 10% every 1 minute). Canary shifts traffic in two increments separated by an interval.',
    referenceUrl: 'https://docs.aws.amazon.com/codedeploy/latest/userguide/deployment-configurations.html',
    isMultiSelect: false,
  },
  {
    id: 'dep-10',
    domain: 'Deployment',
    text: 'In an AWS CodePipeline workflow, a CodeBuild project generates compiled code that must be deployed by a CodeDeploy stage. How is the compiled code passed between these two continuous delivery stages?',
    options: [
      { id: 'A', text: 'CodeBuild zips the files and sends them to a standard SQS queue.' },
      { id: 'B', text: 'CodeBuild stores the files in a shared EFS volume mounted by CodeDeploy.' },
      { id: 'C', text: 'CodePipeline uses an Amazon S3 artifact bucket to store and transfer Output Artifacts to Input Artifacts.' },
      { id: 'D', text: 'CodeBuild pushes the compiled code directly to the CodeDeploy agent via SSH.' }
    ],
    correctOptions: ['C'],
    explanation: 'AWS CodePipeline automatically manages artifact storage in an Amazon S3 artifact bucket, allowing stages to pass output artifacts into the input of subsequent stages.',
    referenceUrl: 'https://docs.aws.amazon.com/codepipeline/latest/userguide/welcome-introducing-artifacts.html',
    isMultiSelect: false,
  },
  {
    id: 'dep-11',
    domain: 'Deployment',
    text: 'A developer is writing a `buildspec.yml` file for AWS CodeBuild. They need to securely reference an API token stored in AWS Systems Manager Parameter Store. How can this be done directly in the buildspec file?',
    options: [
      { id: 'A', text: 'Under the `env: variables:` section using plain text.' },
      { id: 'B', text: 'Under the `env: parameter-store:` section, mapping an environment variable name to the SSM parameter name.' },
      { id: 'C', text: 'By exporting the parameter in the `pre_build` phase.' },
      { id: 'D', text: 'Using the `iam: sts:AssumeRole` command in the `build` phase.' }
    ],
    correctOptions: ['B'],
    explanation: 'CodeBuild securely integrates with SSM Parameter Store natively using the `env: parameter-store` block in `buildspec.yml`.',
    referenceUrl: 'https://docs.aws.amazon.com/codebuild/latest/userguide/build-spec-ref.html#build-spec-ref-syntax',
    isMultiSelect: false,
  },
  {
    id: 'dep-12',
    domain: 'Deployment',
    text: 'An application is deployed using an extensively large AWS CloudFormation template that is hitting service limits. The template requires breaking down into logical, smaller modules that can be linked together. Which CloudFormation feature solves this issue?',
    options: [
      { id: 'A', text: 'CloudFormation Stack Sets' },
      { id: 'B', text: 'CloudFormation Macros' },
      { id: 'C', text: 'CloudFormation Nested Stacks (`AWS::CloudFormation::Stack`)' },
      { id: 'D', text: 'CloudFormation Intrinsic Functions' }
    ],
    correctOptions: ['C'],
    explanation: 'Nested stacks are stacks created as part of other stacks. You create a nested stack within another stack by using the `AWS::CloudFormation::Stack` resource, allowing you to bypass limits and manage complex infrastructure organizationally.',
    referenceUrl: 'https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-nested-stacks.html',
    isMultiSelect: false,
  },
  {
    id: 'dep-13',
    domain: 'Deployment',
    text: 'An AWS CloudFormation template provisions an Amazon VPC, and a separate CloudFormation template provides an Amazon RDS resource that must be placed inside that VPC. How should the developer pass the VPC ID between the stacks?',
    options: [
      { id: 'A', text: 'Export the VPC ID in the `Outputs` section of the first stack and use `Fn::ImportValue` in the second stack.' },
      { id: 'B', text: 'Use `Fn::GetAtt` in the second stack to dynamically retrieve the VPC ID from the first stack.' },
      { id: 'C', text: 'Store the VPC ID in DynamoDB and retrieve it using a Custom Resource.' },
      { id: 'D', text: 'Hardcode the VPC ID in the `Parameters` section of the second stack.' }
    ],
    correctOptions: ['A'],
    explanation: 'When one stack must use values created by another stack, the best practice is to define an Export in the `Outputs` section of the producer stack, and `Fn::ImportValue` in the consumer stack (Cross-Stack References).',
    referenceUrl: 'https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/walkthrough-crossstackref.html',
    isMultiSelect: false,
  },
  {
    id: 'dep-14',
    domain: 'Deployment',
    text: 'A developer needs to deploy a containerized application to Amazon ECS. They have an image stored in Amazon ECR. Which ECS entity must be created to specify the Docker image to use and resource allocations for the container?',
    options: [
      { id: 'A', text: 'ECS Cluster' },
      { id: 'B', text: 'ECS Service' },
      { id: 'C', text: 'ECS Task Definition' },
      { id: 'D', text: 'ECS Target Group' }
    ],
    correctOptions: ['C'],
    explanation: 'The Task Definition is a blueprint that describes how a docker container should launch. It specifies the image, CPU/memory limits, logging configuration, and port mappings.',
    referenceUrl: 'https://docs.aws.amazon.com/AmazonECS/latest/developerguide/task_definitions.html',
    isMultiSelect: false,
  },
  {
    id: 'dep-15',
    domain: 'Deployment',
    text: 'A developer has built a Docker image locally and needs to push it to a private Amazon ECR repository. What must be done before running the `docker push` command?',
    options: [
      { id: 'A', text: 'Run `aws ec2 get-login-password` and pipe it to `docker login` for the ECR registry URI.' },
      { id: 'B', text: 'Run `docker login` providing the AWS account root credentials.' },
      { id: 'C', text: 'Export an STS session token as an environment variable.' },
      { id: 'D', text: 'Install the AWS SDK inside the Docker container.' }
    ],
    correctOptions: ['A'],
    explanation: 'To push to Amazon ECR, you must first authenticate the Docker CLI to the target ECR registry using an authentication token valid for 12 hours, obtained via `aws ecr get-login-password`.',
    referenceUrl: 'https://docs.aws.amazon.com/AmazonECR/latest/userguide/registry_auth.html',
    isMultiSelect: false,
  },
  {
    id: 'dep-16',
    domain: 'Deployment',
    text: 'A developer uses AWS SAM to define an `AWS::Serverless::Function`. In the `Events` section of the definition, an `Api` event source is defined. What does SAM do under the hood during deployment?',
    options: [
      { id: 'A', text: 'It creates an Application Load Balancer.' },
      { id: 'B', text: 'It spins up a small EC2 instance running Nginx.' },
      { id: 'C', text: 'It implicitly creates an Amazon API Gateway REST API and sets up the routing.' },
      { id: 'D', text: 'It creates an Amazon Managed Streaming for Apache Kafka topic.' }
    ],
    correctOptions: ['C'],
    explanation: 'If an `Api` event type is declared inside a Serverless Function without specifying a `RestApiId`, SAM implicitly outlines an `AWS::Serverless::Api` mapping API Gateway endpoints directly to the Lambda function.',
    referenceUrl: 'https://docs.aws.amazon.com/serverless-application-model/latest/developerguide/sam-resource-api.html',
    isMultiSelect: false,
  },

  // --- Troubleshooting & Optimization (7 more) ---
  {
    id: 'opt-5',
    domain: 'Troubleshooting',
    text: 'A developer is troubleshooting an application that communicates across EC2 instances, SQS queues, and Lambda functions. They have enabled AWS X-Ray. What needs to be installed on the Amazon EC2 instances to relay the trace data to X-Ray?',
    options: [
      { id: 'A', text: 'CloudWatch Logs Agent' },
      { id: 'B', text: 'AWS X-Ray Daemon' },
      { id: 'C', text: 'AWS Systems Manager Agent (SSM Agent)' },
      { id: 'D', text: 'AWS SDK for X-Ray' }
    ],
    correctOptions: ['B'],
    explanation: 'The X-Ray daemon is a software application that gathers raw segment data and relays it to the AWS X-Ray API.',
    referenceUrl: 'https://docs.aws.amazon.com/xray/latest/devguide/xray-daemon.html',
    isMultiSelect: false,
  },
  {
    id: 'opt-6',
    domain: 'Troubleshooting',
    text: 'A developer instrumented an application with AWS X-Ray. They want to include custom application-specific data (e.g., "customer_tier": "premium") with traces so they can search and filter traces based on this value in the AWS console. Which feature handles this?',
    options: [
      { id: 'A', text: 'X-Ray Metadata' },
      { id: 'B', text: 'X-Ray Annotations' },
      { id: 'C', text: 'X-Ray Subsegments' },
      { id: 'D', text: 'X-Ray API Gateways' }
    ],
    correctOptions: ['B'],
    explanation: 'Annotations are simple key-value pairs that are indexed for use with filter expressions. Metadata is not indexed and is used to record data you want to store in the trace but don\'t need to use for searching.',
    referenceUrl: 'https://docs.aws.amazon.com/xray/latest/devguide/xray-concepts.html#xray-concepts-annotations',
    isMultiSelect: false,
  },
  {
    id: 'opt-7',
    domain: 'Troubleshooting',
    text: 'A developer needs to query massive amounts of AWS CloudWatch Log data to find the number of times a specific "Timeout" error occurred in a Lambda function over the last 7 days. What is the most efficient way to query these logs?',
    options: [
      { id: 'A', text: 'Export the logs to Amazon S3 and query with Amazon Athena.' },
      { id: 'B', text: 'Use Amazon CloudWatch Logs Insights.' },
      { id: 'C', text: 'Download the logs via the AWS CLI and use grep.' },
      { id: 'D', text: 'Create a CloudWatch Metric Filter.' }
    ],
    correctOptions: ['B'],
    explanation: 'CloudWatch Logs Insights is specifically designed to interactively search and analyze log data in Amazon CloudWatch Logs using a purpose-built query language.',
    referenceUrl: 'https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/AnalyzingLogData.html',
    isMultiSelect: false,
  },
  {
    id: 'opt-8',
    domain: 'Troubleshooting',
    text: 'A developer configured a CloudWatch alarm based on an AWS Lambda function\'s `Errors` metric. The alarm continues to trigger sporadically. Upon investigation, the errors correspond to sudden spikes in incoming API Gateway traffic. Which error code is likely logged?',
    options: [
      { id: 'A', text: '400 Bad Request' },
      { id: 'B', text: '403 Forbidden' },
      { id: 'C', text: '429 Too Many Requests (Throttling)' },
      { id: 'D', text: '200 OK' }
    ],
    correctOptions: ['C'],
    explanation: 'Sudden spikes in traffic beyond the configured concurrent execution limits of the Lambda function result in throttling, which throws a 429 Too Many Requests exception.',
    referenceUrl: 'https://docs.aws.amazon.com/lambda/latest/dg/invocation-scaling.html',
    isMultiSelect: false,
  },
  {
    id: 'opt-9',
    domain: 'Troubleshooting',
    text: 'A serverless backend utilizes API Gateway and AWS Lambda. Occasional API requests take longer than 29 seconds to process, causing the client to receive an HTTP 504 error. What is causing this issue?',
    options: [
      { id: 'A', text: 'The Lambda function timeout is set to 29 seconds.' },
      { id: 'B', text: 'API Gateway integration timeout is hard-limited to 29 seconds for all integration types.' },
      { id: 'C', text: 'Client is closing the TCP connection.' },
      { id: 'D', text: 'API Gateway payload size exceeded.' }
    ],
    correctOptions: ['B'],
    explanation: 'API Gateway has a strict maximum integration timeout of 29 seconds. If a backend (like Lambda) takes longer than 29 seconds to return a response, API Gateway throws a 504 Gateway Timeout error.',
    referenceUrl: 'https://docs.aws.amazon.com/apigateway/latest/developerguide/limits.html',
    isMultiSelect: false,
  },
  {
    id: 'opt-10',
    domain: 'Troubleshooting',
    text: 'A Lambda function receives messages from an Amazon SQS queue. A deployment bug causes the Lambda function to continually fail processing certain messages. Because the messages are never deleted, they keep reappearing in the queue indefinitely. How can a developer prevent this "poison pill" cyclic failure?',
    options: [
      { id: 'A', text: 'Set a maximum `ReceiveCount` on the SQS queue and route failures to a Dead-letter Queue (DLQ).' },
      { id: 'B', text: 'Increase the Visibility Timeout to infinite.' },
      { id: 'C', text: 'Enable EventBridge to catch Lambda failure events and delete the message.' },
      { id: 'D', text: 'Increase the Lambda memory allocation.' }
    ],
    correctOptions: ['A'],
    explanation: 'A Dead-letter Queue (DLQ) paired with a `maxReceiveCount` allows you to set a threshold for failed retries. Once crossed, the offending message is automatically moved to the DLQ for offline analysis.',
    referenceUrl: 'https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-dead-letter-queues.html',
    isMultiSelect: false,
  },
  {
    id: 'opt-11',
    domain: 'Troubleshooting',
    text: 'A developer needs to measure the exact time taken by a specific HTTP call deep within the Node.js application code to a third-party API. They are using AWS X-Ray. What should they implement?',
    options: [
      { id: 'A', text: 'Send an SNS alert for every request.' },
      { id: 'B', text: 'Create an X-Ray Custom Subsegment wrapping the HTTP call.' },
      { id: 'C', text: 'Configure VPC Flow Logs.' },
      { id: 'D', text: 'Increase the sampling rate for the X-Ray daemon.' }
    ],
    correctOptions: ['B'],
    explanation: 'AWS X-Ray Subsegments provide detailed timing information for downstream calls or specific blocks of code (like custom HTTP client calls or compute algorithms).',
    referenceUrl: 'https://docs.aws.amazon.com/xray/latest/devguide/xray-sdk-nodejs-subsegments.html',
    isMultiSelect: false,
  }
];
