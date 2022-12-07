"use strict";(self.webpackChunkst4sd_overview=self.webpackChunkst4sd_overview||[]).push([[477],{29:function(e,t,n){n.r(t),n.d(t,{_frontmatter:function(){return l},default:function(){return k}});var a=n(3366),i=(n(7294),n(4983)),r=n(1217),o=["components"],l={},s=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,i.kt)("div",t)}},m=s("PageDescription"),p=s("Accordion"),u=s("AccordionItem"),c={_frontmatter:l},d=r.Z;function k(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)(d,Object.assign({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)(m,{mdxType:"PageDescription"},(0,i.kt)("p",null,"Explore the key features that ST4SD provides")),(0,i.kt)("p",null,"ST4SD’s aim is to provide a virtual experiment execution runtime with\ndifferentiating technology that supports computational workflows and\ncomputational workflow developers."),(0,i.kt)(p,{mdxType:"Accordion"},(0,i.kt)(u,{title:"Eliminating Failure Cases: Robust Execution Support",mdxType:"AccordionItem"},(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Problem"),": ",(0,i.kt)("em",{parentName:"p"},"Failure of large-scale , long-time campaign executions, often\ndeep into execution, due to identifiable errors at or before submission time"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Solution"),": From many years running large virtual experiment campaigns we’ve\nlearned a number of hard lessons about ensuring robust execution. We’ve\ncaptured these in the runtime with features including image checking, image\npinning, unstable filesystem identification and enhanced exit-code handling.\nWe also developed an automatic test-harness generation tool for\nvirtual experiments to further help identify errors quickly")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"More Information"),":"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"See how these features relate to ",(0,i.kt)("a",{parentName:"li",href:"/overview/restart"},"controlling restart behaviour")),(0,i.kt)("li",{parentName:"ul"},"Coming soon: We will release our tool for automated testing of virtual experiments"))))),(0,i.kt)(u,{title:"Reusing Calculations: Memoization",mdxType:"AccordionItem"},(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Problem"),": ",(0,i.kt)("em",{parentName:"li"},"Repeating expensive calculations due to lack of knowledge of\nexisting results or the difficulty in incorporating existing results into a\nnew virtual experiment execution which could potentially use them")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Solution"),": We provide a fast, high-fidelity method for identifying if a\ntask in a virtual experiment has already been executed and reusing those\nresults instead of re-executing the same task again. It works across clusters\nand architectures and addresses issues in existing similar implementations."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"More Information"),":",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Read ",(0,i.kt)("a",{parentName:"li",href:"/overview/memoization"},"our documentation")," for using this capability"),(0,i.kt)("li",{parentName:"ul"},"Read ",(0,i.kt)("a",{parentName:"li",href:"https://ieeexplore.ieee.org/document/9860151"},"our paper")," on this topic"))))),(0,i.kt)(u,{title:"Moving from Classic HPC to Cloud: Pluggable Backends",mdxType:"AccordionItem"},(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Problem"),": ",(0,i.kt)("em",{parentName:"p"},"Cloud technologies are being rapidly adopted across many domains\nbut for many researchers the large compute resource they require is currently\nmanaged by a classic HPC stack that is not accessible from a cloud-platform.\nHow can they leverage the resources they have access to now while also\npreparing for future compute environments? "))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Solution"),": The ST4SD Runtime solves this issue by abstracting the execution\nbackend e.g. LSF or Kubernetes from the virtual experiment description. This\nallows a researcher to initially write a virtual experiment that runs on LSF\nand later easily move it to Kubernetes. To do this, the same\nvirtual experiment code is enhanced with some extra information for\nKubernetes - which can be as little as a couple of lines - the rest of the\nvirtual experiment logic stays the same.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"More Information"),":"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"See ",(0,i.kt)("a",{parentName:"li",href:"/overview/installation#install-on-classic-hpc"},"here")," for how to install\n",(0,i.kt)("inlineCode",{parentName:"li"},"st4sd-runtime-core")," on a classic LSF managed cluster"),(0,i.kt)("li",{parentName:"ul"},"This capability leverages ",(0,i.kt)("em",{parentName:"li"},"Reducing Complexity: Simple Specification, Smart\nRuntime")," and can also use ",(0,i.kt)("em",{parentName:"li"},"Simplifying Multi-Environment Deployments:\nPlatform Layers"),". See those feature descriptions for more details."),(0,i.kt)("li",{parentName:"ul"},"Coming soon: Detailed example of building a virtual experiment that can run\non an LSF based HPC cluster and OpenShift"))))),(0,i.kt)(u,{title:"Reducing Time-to-Insight: Analytics Co-processing",mdxType:"AccordionItem"},(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Problem"),": ",(0,i.kt)("em",{parentName:"p"},"Many computational workflows, for example in particle\nsimulation, consist of a long-simulation followed by expensive analysis over\neach step of the simulation. These computations could be overlapped to save\ntime and also to provide quicker feedback for decision making"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Solution"),": The ST4SD Runtime provides the capability to run analytics in\nparallel with the simulation so it can e.g. consume steps from simulation in\nbatches. This reduces time-to-insight as most of the analytics workload is\nperformed concurrently with the simulation, allowing it to complete shortly\nafter it. This feature also allows much quicker feedback on simulation\nbehaviour which can be used by external entities to make decisions like\nstopping an experiment when they see an answer is accurate enough.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"More Information"),":"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Read ",(0,i.kt)("a",{parentName:"li",href:"/overview/tutorial"},"our tutorial")," for examples of how to use this capability"),(0,i.kt)("li",{parentName:"ul"},"Many studies using ST4SD, for example on\n",(0,i.kt)("a",{parentName:"li",href:"http://dx.doi.org/10.1021/acs.jpcb.0c06132"},"computational force-field training"),"\nand\n",(0,i.kt)("a",{parentName:"li",href:"http://dx.doi.org/10.1021/acs.jctc.0c00311"},"worm-like micelle identification"),"\nused this capability heavily"))))),(0,i.kt)(u,{title:"Simplifying Multi-Environment Deployments: Platform Layers",mdxType:"AccordionItem"},(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Problem"),": ",(0,i.kt)("em",{parentName:"p"},"As researchers we often ran into issues maintaining\nvirtual experiments across different hardware platforms e.g. Intel v Power, or\ndifferent deployment environments e.g. dev and production, which required\ndifferent settings."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Solution"),": The ST4SD Runtime solves this issue by enabling a virtual\nexperiment to define named sets of variables and environments, a.k.a.\nplatforms, that can be selected at runtime to customize execution for a\nparticular environment. Further, when a virtual experiment is added to a\n",(0,i.kt)("inlineCode",{parentName:"p"},"st4sd-runtime-service")," registry a default platform can be set. Thus, for\nexample, for production environments you can ensure that everyone will use\nproduction platform values when executing a particular experiment.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"More Information"),":"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"See the\n",(0,i.kt)("a",{parentName:"li",href:"/overview/workflow-specification#blueprints"},"virtual experiment specification")," for\nexamples of how to use this capability"))))),(0,i.kt)(u,{title:"Reducing Complexity: Simple Specification, Smart Runtime",mdxType:"AccordionItem"},(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Problem"),": ",(0,i.kt)("em",{parentName:"li"},"Reduce the execution management burden on virtual experiment\ndevelopers, enable them to focus on the computational process.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Solution"),": We aim to reduce this burden by moving as many execution\nmanagement details as possible to the ST4SD Runtime. For example our\nspecification does not require users to handle data-storage or transfer,\nexit-codes, restart behaviour, memoization metadata, or know backend-specific\nexecution details. This also enables all virtual experiments to potentially\nbenefit out-of-the-box when we add new features to the ST4SD Runtime.")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"More Information"),":"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"See ",(0,i.kt)("a",{parentName:"li",href:"/overview/workflow-specification"},"virtual experiment specification")," for more\ndetails"))))),(0,i.kt)(u,{title:"Securing Execution: Registry Secrets and Encrypted Env-Vars",mdxType:"AccordionItem"},(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Problem"),": ",(0,i.kt)("em",{parentName:"li"},"Virtual experiments may require various values which should\nremain secured - for example tokens for accessing private image registries -\nbut these can be leaked via notebooks, execution scripts, inside\nvirtual experiment specifications or metadata databases")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Solution"),": ",(0,i.kt)("inlineCode",{parentName:"li"},"st4sd-runtime-service")," addresses these issues by allowing users\nto specify image pull secrets a single time when adding a virtual experiment\nto an ",(0,i.kt)("inlineCode",{parentName:"li"},"st4sd-runtime-service")," registry. The secrets are then encrypted and\nused for subsequent executions, not appearing in any metadata. The ST4SD\nRuntime also enables sensitive data to be passed to virtual experiments as\nsecure environment-variables. Such variables are encrypted on submission and\ncannot be accessed via any queries, metadata etc."))),(0,i.kt)(u,{title:"Capturing Data: The ST4SD Datastore",mdxType:"AccordionItem"},(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Problem"),": ",(0,i.kt)("em",{parentName:"li"},"How can scientists easily access and perform powerful queries on\nthe virtual experiments they have run")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Solution"),": The ",(0,i.kt)("inlineCode",{parentName:"li"},"st4sd-datastore")," automatically captures information on\nexecuted virtual experiments and enables retrieval of workflow data. It is\nbased on MongoDB, allowing flexible and powerful queries and supports\nretrieving outputs, and intermediate data, that workflow instances generate. A\nPython API makes operations simple to carry out."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"More Information"),":",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/st4sd/st4sd-examples/blob/main/notebooks/ST4SD%20Datastore%20-%20Common%20Query%20Examples.ipynb"},"This notebook"),"\nin our\n",(0,i.kt)("a",{parentName:"li",href:"https://github.com/st4sd/st4sd-examples/"},"quickstart notebook collection"),"\ngives many examples of how to use the ",(0,i.kt)("inlineCode",{parentName:"li"},"st4sd-datastore"),".")))))))}k.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-key-features-md-e5b09380682c09dd76df.js.map