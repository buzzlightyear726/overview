"use strict";(self.webpackChunkst4sd_overview=self.webpackChunkst4sd_overview||[]).push([[235],{2004:function(e,t,a){a.r(t),a.d(t,{_frontmatter:function(){return o},default:function(){return k}});var n=a(3366),i=(a(7294),a(4983)),r=a(1217),s=["components"],o={},l=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,i.kt)("div",t)}},p=l("PageDescription"),m=l("AnchorLinks"),c=l("AnchorLink"),u=l("InlineNotification"),d={_frontmatter:o},h=r.Z;function k(e){var t=e.components,a=(0,n.Z)(e,s);return(0,i.kt)(h,Object.assign({},d,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)(p,{mdxType:"PageDescription"},(0,i.kt)("p",null,"Use this page to learn what parameterised packages are and how to create them.")),(0,i.kt)(m,{mdxType:"AnchorLinks"},(0,i.kt)(c,{mdxType:"AnchorLink"},"What is a parameterised virtual experiment package?"),(0,i.kt)(c,{mdxType:"AnchorLink"},"Structure of a parameterised virtual experiment package"),(0,i.kt)(c,{mdxType:"AnchorLink"},"The Base section"),(0,i.kt)(c,{mdxType:"AnchorLink"},"The Parameterisation section"),(0,i.kt)(c,{mdxType:"AnchorLink"},"The Metadata section"),(0,i.kt)(c,{mdxType:"AnchorLink"},"Adding a parameterised package to a registry"),(0,i.kt)(c,{mdxType:"AnchorLink"},"Example")),(0,i.kt)("p",null,"A ",(0,i.kt)("inlineCode",{parentName:"p"},"parameterised virtual experiment"),"defines how to run a virtual experiment in a particular way."),(0,i.kt)("p",null,"ST4SD provides a registry for parameterised virtual experiments.\nThe registry allows researchers to browse and use these packages.\nEach ST4SD deployment has a registry and we also maintain ",(0,i.kt)("a",{parentName:"p",href:"https://registry.st4sd.res.ibm.com/"},"a publicly available registry"),"."),(0,i.kt)("p",null,"This document explains how developers can write  parameterised virtual experiment package.\nFor how these packages can be used by others see ",(0,i.kt)("a",{parentName:"p",href:"/overview/using-the-virtual-experiments-registry-ui"},"using the virtual experiment registry"),"."),(0,i.kt)("h2",null,"What is a parameterised virtual experiment package?"),(0,i.kt)("p",null,"A parameterised virtual experiment package is a python dictionary (or YAML or JSON structure) that describes:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"How to access a virtual experiment"),(0,i.kt)("li",{parentName:"ul"},"What options to allow users to change"),(0,i.kt)("li",{parentName:"ul"},"What options have preset values"),(0,i.kt)("li",{parentName:"ul"},"Metadata about the package.")),(0,i.kt)("p",null,"It is ",(0,i.kt)("strong",{parentName:"p"},"parameterised")," as the package can set the values of options in the base experiment to give certain behaviours e.g. setting a quantum method known to be fast, that can’t be overridden by the user.\nThe package can also specify a restricted set of values for an option.\nIn this way the same base virtual experiment can be configured in many ways and provide different parameterised packages for different tasks."),(0,i.kt)("h2",null,"Structure of a parameterised virtual experiment package"),(0,i.kt)("p",null,"A parameterised package has three main sections:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"The base packages (i.e. workflow definitions) that the virtual experiment consists of.",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Where they are located, what version to get, and how to get them. Often there will be just one."))),(0,i.kt)("li",{parentName:"ol"},"The parameterisation information:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Presets: options that  users cannot change."),(0,i.kt)("li",{parentName:"ul"},"Execution options: options that users can change potential with some restrictions."))),(0,i.kt)("li",{parentName:"ol"},"Metadata:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Various other information about the package e.g. description, license, maintainer and keywords.")))),(0,i.kt)("p",null,"Each of these is a top-level key in the package description.\nThe following snippet shows this top-level structure:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'definition = {\n    "base": {\n        # Required: Base package information ...\n    }\n    "metadata": {\n            # Required: Various info about the package  ...\n    },\n    "parameterisation": {\n      # Optional: What values are set and what can be changed ..\n    }\n}\n')),(0,i.kt)("p",null,"The rest of this document explains each section, outlining what information is required and optional."),(0,i.kt)(u,{mdxType:"InlineNotification"},(0,i.kt)("p",null,"In the following we use YAML to describe the section structure, for ease of explanation. This would have to be converted to a python dictionary to upload to the registry. An example of doing this is given in the ",(0,i.kt)("a",{parentName:"p",href:"#pushing-the-package"},"pushing a package")," section.")),(0,i.kt)("h2",null,"The Base section"),(0,i.kt)(m,{small:!0,mdxType:"AnchorLinks"},(0,i.kt)(c,{mdxType:"AnchorLink"},"Sources"),(0,i.kt)(c,{mdxType:"AnchorLink"},"Specifying image registry dependencies")),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"base")," section describes where the base virtual experiment is and how to access it."),(0,i.kt)("p",null,"A virtual experiment can contain multiple base packages although for handwritten packages this will usually be one."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'base\n - name: #OPTIONAL - defaults to "main", is required for multi-package experiments\n   source:\n      $PACKAGE_SOURCETYPE: $PACKAGE_SOURCE_STRUCTURE #REQUIRED: ONE package source type. See below for options\n   dependencies:\n     imageRegistries:\n       - $IMAGE-REGISTRY_STRUCTURE #OPTIONAL: list of image registry structures defining how to access the images required by the experiment. See below for options.\n   config: #How to read the experiment from the given source e.g. manifest etc. REQUIRED IF the base virtual experiment uses standard packaging (is a workflow conf + manifest)\n     path: #relative (to the "root" of `${BASE_PACKAGE}.source`) path to the virtual experiment (flowir) configuration file\n     manifestPath: #relative (to "root" of `${BASE_PACKAGE}.source`) path to the virtual experiments manifest file\n')),(0,i.kt)("h3",null,"Sources"),(0,i.kt)("p",null,"Select the source that matches where your virtual experiment is stored"),(0,i.kt)("h4",null,"Git source"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-Yaml"},'git:\n  location:\n    url: the http url of the repo\n    # Must specify exactly ONE of branch, tag, and commit\n    branch: name of branch\n    tag: name of tag\n    commit: git commit hash\n  security:\n    oauth:\n      # You must use exactly ONE of `value` or `valueFrom`.\n      # "value" if automatically converted to "valueFrom.secretKeyRef` when you push the package\n      valueFrom:\n        secretKeyRef:\n          name: name of secret containing oauthSecret key\n          key: name of key holding the token, defaults to "oauth-token"\n      value: an oauth api key for authenticating to git with HTTPS basic auth\n')),(0,i.kt)(u,{kind:"info",mdxType:"InlineNotification"},(0,i.kt)("p",null,"ST4SD will use the oauth-token you provide to ",(0,i.kt)("inlineCode",{parentName:"p"},"git clone https://${oauth-token}@server.com/your-org/your-repo.git"),"."),(0,i.kt)("p",null,"If you are using ",(0,i.kt)("a",{parentName:"p",href:"https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token"},"Github")," to host your git repository you can generate a Personal Access Token with just read-access to your git repository."),(0,i.kt)("p",null,"If you are using ",(0,i.kt)("a",{parentName:"p",href:"https://docs.gitlab.com/ee/user/project/deploy_tokens/#create-a-deploy-token"},"Gitlab"),", you can generate a Deploy Token with read acces to your project.")),(0,i.kt)(u,{kind:"warning",mdxType:"InlineNotification"},(0,i.kt)("p",null,"For ",(0,i.kt)("a",{parentName:"p",href:"https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token#using-a-token-on-the-command-line"},"Github")," and ",(0,i.kt)("a",{parentName:"p",href:"https://docs.gitlab.com/ee/user/project/deploy_tokens/#clone-a-repository"},"Gitlab")," you should prefix the Personal Access Token with your username like so: ",(0,i.kt)("inlineCode",{parentName:"p"},"${Username}:${PersonalAccessToken}"),".")),(0,i.kt)("h4",null,"Datashim source"),(0,i.kt)("p",null,"If you have installed ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/datashim-io/datashim"},"Datashim")," on your cluster, you can use a Datashim ",(0,i.kt)("inlineCode",{parentName:"p"},"dataset")," as the location of your virtual experiment base package."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"dataset:\n  # No need for a security field because Datashim removes this requirement.\n  location:\n    dataset: the name of the dataset object\n")),(0,i.kt)("h4",null,"S3 source"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'s3:\n  location:\n    region: region (optional)\n    endpoint: S3 endpoint url\n    bucket: bucket name\n  security:\n    valueFrom:\n        # Must choose exactly ONE of secretS3KeyRef and valuseS3\n        # "valuesS3" is automatically converted to "secretS3KeyRef" when you push the package\n      secretS3KeyRef:\n        name: name of existing kubernetes Secret object containing access information\n          # keyAccessKeyId has default value "accessKeyId"\n        keyAccessKeyId: key in Secret object that holds accessKeyId\n          # secretAccessKey has default value "secretAccessKey"\n        keySecretAccessKey: key in Secret object that holds secretAccessKey\n      s3Ref:\n        accessKeyId: Value of accessKeyId\n        secretAccessKey: Value of accessKeyId\n')),(0,i.kt)("h3",null,"Specifying image registry dependencies"),(0,i.kt)("p",null,"Virtual experiments often use images which may be stored in private registries. This structure allows the developer to provide ST4SD with information on how to access these registries."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'dependencies:\n  #An Optional dictionary of dependency types\n  imageRegistries: # An optional list of image registries struct\n  - serverUrl: the url to the image registry\n    security:\n      valueFrom:\n        # Must select exactly 1 of secretKeyRef and usernamePassword\n        # "usernamePassword" is automatically converted to a "secretKeyRef" when the package is pushed\n        secretKeyRef:\n          name: name of an existing "docker-registry" kubernetes secret object containing the access information\n          key: Name of key containing the auth information (default is .dockerconfigjson)\n        usernamePassword:\n          # here expect fields we would use for `kubectl create secret docker-registry`\n          username: ...\n          password: ...\n\n')),(0,i.kt)("h2",null,"The Parameterisation section"),(0,i.kt)(m,{small:!0,mdxType:"AnchorLinks"},(0,i.kt)(c,{mdxType:"AnchorLink"},"Parameterisation rules"),(0,i.kt)(c,{mdxType:"AnchorLink"},"Presets"),(0,i.kt)(c,{mdxType:"AnchorLink"},"Execution options")),(0,i.kt)("p",null,"ST4SD supports 2 levels of parameterisation:",(0,i.kt)("inlineCode",{parentName:"p"},"presets")," which are options that virtual experiment developers decide and users cannot change; and ",(0,i.kt)("inlineCode",{parentName:"p"},"executionOptions"),"  that virtual experiment developers allow users to override potentially with some limit."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"parameterisation:\n  presets: ...\n  executionOptions: ...\n")),(0,i.kt)("h3",null,"Parameterisation rules"),(0,i.kt)("p",null,"The parameter types that can be specified in each section are:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"variables (",(0,i.kt)("inlineCode",{parentName:"li"},"variables"),"): Values for variables used in the experiment"),(0,i.kt)("li",{parentName:"ul"},"data-files (",(0,i.kt)("inlineCode",{parentName:"li"},"data"),") : Values for data files used by the experiment"),(0,i.kt)("li",{parentName:"ul"},"platform (",(0,i.kt)("inlineCode",{parentName:"li"},"platform"),"): Value for the platform (named set of variables) to use"),(0,i.kt)("li",{parentName:"ul"},"runtime arguments (",(0,i.kt)("inlineCode",{parentName:"li"},"runtime"),") : ",(0,i.kt)("inlineCode",{parentName:"li"},"elaunch.py")," command line arguments")),(0,i.kt)("p",null,"Both ",(0,i.kt)("inlineCode",{parentName:"p"},"presets")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"executionOptions")," can be specified in same package."),(0,i.kt)("p",null,"It is an error to specify the same parameter (variable, data file, runtime option) in both sections. In addition ",(0,i.kt)("inlineCode",{parentName:"p"},"platform")," can only be specified in one of the two sections."),(0,i.kt)("p",null,"If a virtual experiment has a parameter that is not specified in either section it is ",(0,i.kt)("inlineCode",{parentName:"p"},"preset")," with its default value and cannot be changed."),(0,i.kt)(u,{kind:"warning",mdxType:"InlineNotification"},(0,i.kt)("p",null,"If a developer wants a user to be able to provide a value for a parameter they ",(0,i.kt)("strong",{parentName:"p"},"must")," specify it in ",(0,i.kt)("inlineCode",{parentName:"p"},"executionOptions"))),(0,i.kt)("p",null,"For ",(0,i.kt)("inlineCode",{parentName:"p"},"executionOptions")," the value of the ",(0,i.kt)("inlineCode",{parentName:"p"},"parameter")," is resolved as follows:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"The value provided by the user"),(0,i.kt)("li",{parentName:"ol"},"The default value provided by the developer in the parameterised package if there is one"),(0,i.kt)("li",{parentName:"ol"},"The first value in the array of options provided by the developer in the parameterised package if there is one"),(0,i.kt)("li",{parentName:"ol"},"If none of the above exist the default value of the parameter in the ",(0,i.kt)("inlineCode",{parentName:"li"},"base-package")," is used")),(0,i.kt)("h3",null,"Presets"),(0,i.kt)("p",null,"Use presets to define set values for parameters"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'parameterisation:\n  presets:  # optional\n    # Fields defined here *cannot* be overridden by `executionOptions`.\n    # All fields are optional\n    variables: #A list of preset values for variables in the virtual experiment\n    - name: $name of variable\n      value: $variableValue\n    data:\n      - name: name of a file in the "data" directory\n        value: contents of file - utf8 string (not suitable for binary files)\n    runtime:\n      args:\n      - array of `elaunch.py` command line strings\n    platform:  #Value for the experiment platform.\n\n\n\n')),(0,i.kt)("h3",null,"Execution options"),(0,i.kt)("p",null,"Use execution options to allow user to choose values for parameters if they want"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"  executionOptions: # optional\n    # users may override values within constraints that workflow developers set\n    variables:\n    # Variables that the developer allows the user to override.\n    # These CANNOT appear in presets.variables\n    - name: $variable name\n      valueFrom: #Optional: An array of possible values for the variable\n      # If a user does set a value for the variable the 1st entry is used\n      # If valueFrom is not given then user can set any value for the variable.\n      # if they do not set any value then the variable\n      # receives the value that the workflow definition contains in\n      # the platform definition\n      - value: value of variable\n    data: #A list of data files whose contents the user can set.\n    - name: filename under `data` directory, the file must already exist\n    runtime: # Arguments to pass to `elaunch.py`\n             # (cannot include -i -a -d --instanceName)\n      args:\n      - array of elaunch.py command line strings\n    platform: #Default for experiment platform or choice.\n              # Cannot be specified here if in `presets`\n    - an array of platform names. # If the user does not specifying one on start\n                                  # then the 1st entry is used. If no platform\n                                  # is specified the `default` platform is used\n\n\n")),(0,i.kt)("h2",null,"The Metadata section"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"metadata")," section is used to provide various other information about the parameterised virtual experiment."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"metadata:\n  package: #All the maintainer metadata. Can decide exact structure at implementation time.\n    name: the package name\n    tags: # Optional\n    - latest # On Push, auto insert latest if missing\n    maintainer: email (optional)\n    license: some string (optional)\n    keywords: # optional\n    - keyword 1\n    - keyword 2\n\n")),(0,i.kt)("h2",null,"Adding a parameterised package to a registry"),(0,i.kt)(m,{small:!0,mdxType:"AnchorLinks"},(0,i.kt)(c,{mdxType:"AnchorLink"},"Pushing the package"),(0,i.kt)(c,{mdxType:"AnchorLink"},"Parameterised Package Identifier"),(0,i.kt)(c,{mdxType:"AnchorLink"},"Package Tags"),(0,i.kt)(c,{mdxType:"AnchorLink"},"Registry metadata")),(0,i.kt)("h3",null,"Pushing the package"),(0,i.kt)("h4",null,"From a python dictionary"),(0,i.kt)("p",null,"The parameterised package is stored as a dictionary in a python module ",(0,i.kt)("inlineCode",{parentName:"p"},"mypackage.py")," (can be any name). The dictionary is assigned to a variable (can be any name) e.g."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'d = {\n  "base": ...\n}\n')),(0,i.kt)("p",null,"Then"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"import mypackage\napi.api_experiment_push(mypackage.d)\n")),(0,i.kt)("h4",null,"From YAML"),(0,i.kt)("p",null,"The parameterised package is stored as YAML in a  file ",(0,i.kt)("inlineCode",{parentName:"p"},"mypackage.yaml")," (can be any name)."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"import yaml\nwith open('mypackage.yaml') as f:\n    api.api_experiment_push(yaml.load(f))\n")),(0,i.kt)("h4",null,"From JSON"),(0,i.kt)("p",null,"The parameterised package is stored as  JSON in a file ",(0,i.kt)("inlineCode",{parentName:"p"},"mypackage.json")," (can be any name)."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"import json\nwith open('mypackage.json') as f:\n    api.api_experiment_push(json.load(f))\n")),(0,i.kt)("h4",null,"Registry actions when a package is pushed"),(0,i.kt)("p",null,"On pushing a parameterised virtual experiment package, the registry:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Generates a unique Id for the entry  see ",(0,i.kt)("a",{parentName:"li",href:"#parameterised-package-identifier"},"Parameterised Packaged Identifier")),(0,i.kt)("li",{parentName:"ul"},"Applies and updates tags - see ",(0,i.kt)("a",{parentName:"li",href:"#package-tags"},"Package Tags")),(0,i.kt)("li",{parentName:"ul"},"Stores any credentials as Kubernetes secrets and converts the relevant fields in the parameterised package to ",(0,i.kt)("inlineCode",{parentName:"li"},"secretKeyRef")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"secretS3KeyRef")," types."),(0,i.kt)("li",{parentName:"ul"},"Adds additional data to the parameterised package - see ",(0,i.kt)("a",{parentName:"li",href:"#registry-metadata"},"registry metadata"))),(0,i.kt)("h3",null,"Parameterised Package Identifier"),(0,i.kt)("p",null,"When  a parameterised package is pushed to the virtual experiment registry it is assigned a  ",(0,i.kt)("inlineCode",{parentName:"p"},"digest")," which is unique between all packages with the same package name (the value of ",(0,i.kt)("inlineCode",{parentName:"p"},"metadata.package.name"),")."),(0,i.kt)("p",null,"The unique identifier of the package is then ",(0,i.kt)("inlineCode",{parentName:"p"},"$packageName@$digest"),". For example ",(0,i.kt)("inlineCode",{parentName:"p"},"my-experiment@sha256x16092ca4bb13955b1397bf38cfba45ef11c9933bf796454a81de4f86")),(0,i.kt)("p",null,"By convention the registry assumes  parameterised packages with the same package name represent different versions of that package. These are collected together in the registry-ui with the details of the most recent (last uploaded) package shown and links to all previous versions of the package"),(0,i.kt)("h3",null,"Package Tags"),(0,i.kt)("p",null,"Parameterized packages can have  ",(0,i.kt)("em",{parentName:"p"},"tags"),"  applied to them. A tag is a shorthand for referencing the package. For example by adding the tag ",(0,i.kt)("inlineCode",{parentName:"p"},"1.0")," to the package ",(0,i.kt)("inlineCode",{parentName:"p"},"my-experiment@sha256x16092ca4bb13955b1397bf38cfba45ef11c9933bf796454a81de4f86")," you can reference it as ",(0,i.kt)("inlineCode",{parentName:"p"},"my-experiment:1.0")," in various operations."),(0,i.kt)("p",null,"Developers can specify tags when pushing a package using the  ",(0,i.kt)("inlineCode",{parentName:"p"},"metadata.package.tags")," field of the package payload. Tagging a parameterised package with a tag removes the tag from any other parameterised package with the same name. This guarantees that if ",(0,i.kt)("inlineCode",{parentName:"p"},"$packageName:$tag")," exists, it points to exactly one ",(0,i.kt)("inlineCode",{parentName:"p"},"$packageName@$digest"),". The API call ",(0,i.kt)("inlineCode",{parentName:"p"},"api_experiment_update_tags(packageIdentifier, tags)")," can also be used add or remove a tag to a package at any time. Note, this call requires ",(0,i.kt)("inlineCode",{parentName:"p"},"tags")," to include ",(0,i.kt)("strong",{parentName:"p"},"all")," tags you want associated with the package. If an existing tag is not in this list then it will be removed."),(0,i.kt)("p",null,"The current tags associated with a package can be found by inspecting the ",(0,i.kt)("inlineCode",{parentName:"p"},"metadata.package.tags")," element of the package definition in the registry."),(0,i.kt)(u,{mdxType:"InlineNotification"},(0,i.kt)("p",null,"When a package is pushed it is automatically tagged ",(0,i.kt)("inlineCode",{parentName:"p"},"latest")," by the registry.\nIf only a package-name is passed to an API call require a package identifier then the tag ",(0,i.kt)("inlineCode",{parentName:"p"},"latest")," is assumed.")),(0,i.kt)(u,{kind:"warning",mdxType:"InlineNotification"},(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"latest")," can be moved to another digest with the same-package name if desired using ",(0,i.kt)("inlineCode",{parentName:"p"},"api_experiment_update_tags"),". However ",(0,i.kt)("inlineCode",{parentName:"p"},"latest")," cannot be removed. That is you will receive an error if you omit it from the ",(0,i.kt)("inlineCode",{parentName:"p"},"tag")," list in ",(0,i.kt)("inlineCode",{parentName:"p"},"api_experiment_update_tags")," for a digest that is tagged with ",(0,i.kt)("inlineCode",{parentName:"p"},":latest"),". You can only remove the ",(0,i.kt)("inlineCode",{parentName:"p"},":latest")," tag from a digest if you tag a different digest with the same name ",(0,i.kt)("inlineCode",{parentName:"p"},"package-name")," with the tag  ",(0,i.kt)("inlineCode",{parentName:"p"},":latest"),".")),(0,i.kt)("h4",null,"Example"),(0,i.kt)("p",null,"A parameterised package with name ",(0,i.kt)("inlineCode",{parentName:"p"},"my-experiment")," is pushed to the registry. It is given the digest ",(0,i.kt)("inlineCode",{parentName:"p"},"sha256x16092ca4bb13955b1397bf38cfba45ef11c9933bf796454a81de4f86"),"."),(0,i.kt)("p",null,"All 3 identifiers below point to the same digest:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"my-experiment")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"my-experiment:latest")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"my-experiment@sha256x16092ca4bb13955b1397bf38cfba45ef11c9933bf796454a81de4f8"))),(0,i.kt)("p",null,"Any of these 3 identifiers can be used to refer to the new parameterised package in API call e.g. to start an instance of this parameterised virtual experiment all the following will work:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'api.api_experiment_start("my-experiment", payload={})\napi.api_experiment_start("my-experiment:latest", payload={})\napi.api_experiment_start("my-experiment@sha256x16092ca4bb13955b1397bf38cfba45ef11c9933bf796454a81de4f86", payload={})\n')),(0,i.kt)("h4",null,"Package tag update rules"),(0,i.kt)("p",null,"If a tag is requested for a digest and that tag is already associated with another digest with the same package-name,  then the registry updates ",(0,i.kt)("inlineCode",{parentName:"p"},"$packageName:$tag")," to point to the new package. This ensures that ",(0,i.kt)("inlineCode",{parentName:"p"},"$packageName:$tag")," points to a unique digest even if the workflow developers pushed the ",(0,i.kt)("inlineCode",{parentName:"p"},"$tag")," in the past."),(0,i.kt)("p",null,"In general this operation involves updating the ",(0,i.kt)("inlineCode",{parentName:"p"},"metadata.registry.tags")," fields of all parameterised packages with the same ",(0,i.kt)("inlineCode",{parentName:"p"},"package-name"),"."),(0,i.kt)("h3",null,"Registry metadata"),(0,i.kt)("p",null,"The registry adds various information it discovers to the ",(0,i.kt)("inlineCode",{parentName:"p"},"metadata")," section of the package under the ",(0,i.kt)("inlineCode",{parentName:"p"},"registry")," key. This includes the id of the package"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"registry: #All data added by runtime - developers cannot set anything under registry\n    digest: $a string up to 63 characters #The identifier\n    createdOn: UTC time that this digest was created, format is %Y-%m-%dT%H%M%S.%f%z\n    timesExecuted: int - automatically increased every time a user launches this virtual experiment entry in the ST4SD deployment the registry is attached to\n    tags: #A list of tags which point to this digest.\n    - $TAG # This is a SUBSET of metadata.package.tags. It can be EMPTY if no tag points to this digest anymore\n    interface: {} # ST4SD injects the Virtual experiment interface if it exists\n    data: #The list of filenames under the `data` directory (just top-level files, NO directories)\n    - name: $DATA_FILE_NAME\n    inputs: #The list of files under the `input` directory. These are files that users must provide when launching this virtual experiment\n    - name: $INPUT_FILE_NAME\n    containerImages: #A list of the names of the container images that could be used by this virtual experiment. If\n    - name: the name of a container image (e.g. a URL)\n")),(0,i.kt)("h2",null,"Example"),(0,i.kt)("p",null,"Here is an example parameterised package for the ",(0,i.kt)("a",{parentName:"p",href:"/overview/tutorial"},"sum-numbers toy virtual experiment")," which lives on ",(0,i.kt)("inlineCode",{parentName:"p"},"git")," that demonstrates many of the features discussed above."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'definition = {\n    "base": {\n        # We define the one or more base-packages (here just one)\n        "packages": [{\n            "source": {\n                "git": {\n                    "location": {\n                        # This one lives on Git, under the "main" branch, we can also use\n                        # "tag" and "commit"\n                        "url": "https://github.com/st4sd/sum-numbers.git",\n                        "branch": "main"\n                    }\n                }\n            },\n            "config": {  # Optional - not required for this example\n                "path": ".", # use when package is not at the root of the source location\n                "manifestPath": None,  # relative path to manifest YAML (not used in this example)\n            }\n        }]\n    },\n    "metadata": {\n        "package": {\n            "name": "sum-numbers", # Required\n            "tags": ["latest"],  # Optional - *always* includes "latest"\n            "maintainer": "vassilis.vassiliadis@ibm.com", # Optional but recommended\n            "description": "Toy virtual experiment", # Optional but recommended\n            "keywords": [ # Optional but recommended\n                "openshift", "hello-world"\n            ]\n        }\n    },\n    "parameterisation": {  # Optional but recommended\n        "presets": {  # Options that users CANNOT override\n            "runtime": {\n                "args": [\n                    # *Always* register the workflow to the ST4SD datastore (aka Centralized Database)\n                    "--registerWorkflow=yes"\n                ]\n            }\n        },\n        "executionOptions": { # Options that users *MAY* override and *MUST* adhere to rules below\n            "variables": [\n                # Configures the number of replicas, can be any positive integer, or 1 if unspecified\n                {"name": "numberOfPoints", "value": "1"}\n            ],\n            "data": [\n                # Users *may* provide a `cat_me.txt` file\n                {"name": "cat_me.txt"}\n            ],\n            # Users can *only* execute the `openshift` and `default` platforms - even if the virtual experiment\n            # comes with more platform definitions\n            "platform": ["openshift", "default"]\n        }\n    }\n}\n\napi.api_experiment_push(definition)\n')))}k.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-creating-a-parameterised-package-mdx-9b74e2dcd9d4ae593e5f.js.map