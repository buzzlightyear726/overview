"use strict";(self.webpackChunkst4sd_overview=self.webpackChunkst4sd_overview||[]).push([[951],{8019:function(e,t,n){n.r(t),n.d(t,{_frontmatter:function(){return r},default:function(){return h}});var a=n(3366),o=(n(7294),n(4983)),l=n(1217),i=["components"],r={},s=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.kt)("div",t)}},p=s("PageDescription"),m=s("AnchorLinks"),u=s("AnchorLink"),k=s("InlineNotification"),d={_frontmatter:r},c=l.Z;function h(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)(c,Object.assign({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)(p,{mdxType:"PageDescription"},(0,o.kt)("p",null,"This page shows how to use the OpenShift CLI to interact ST4SD. ")),(0,o.kt)(m,{mdxType:"AnchorLinks"},(0,o.kt)(u,{mdxType:"AnchorLink"},"Software Requirements"),(0,o.kt)(u,{mdxType:"AnchorLink"},"Getting Started"),(0,o.kt)(u,{mdxType:"AnchorLink"},"Running a Workflow"),(0,o.kt)(u,{mdxType:"AnchorLink"},"Names and Labels"),(0,o.kt)(u,{mdxType:"AnchorLink"},"Examining Virtual Experiments"),(0,o.kt)(u,{mdxType:"AnchorLink"},"Debugging"),(0,o.kt)(u,{mdxType:"AnchorLink"},"Switching from Notebook to Commandline"),(0,o.kt)(u,{mdxType:"AnchorLink"},"Managing Workflows")),(0,o.kt)("p",null,"iPython notebooks  make it easy to run and work with virtual experiments. However there is often a need to go deeper, especially for developers. In this case using the OpenShift CLI via a terminal is invaluable. "),(0,o.kt)(k,{mdxType:"InlineNotification"},(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"For"),": Researchers, Developers and Administrators"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Use-When:"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Researchers: You want to go deeper into the outputs of a particular workflow using standard terminal tools"),(0,o.kt)("li",{parentName:"ul"},"Developers: Debugging virtual experiments. Inspecting and deleting workflows."),(0,o.kt)("li",{parentName:"ul"},"Administrators: Inspecting and deleting workflows."))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Skill Requirements:"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Being comfortable with working with command-line technologies"),(0,o.kt)("li",{parentName:"ul"},"Some knowledge of OpenShift/K8s CLI tools"))))),(0,o.kt)("h2",null,"Software Requirements"),(0,o.kt)("p",null,"The basic requirements are:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Access to an OpenShift instance with the ST4SD stack installed (see ",(0,o.kt)("a",{parentName:"li",href:"/overview/#first-steps"},"first steps")," for more information)"),(0,o.kt)("li",{parentName:"ul"},"OpenShift command line tools installed")),(0,o.kt)("h2",null,"Getting Started"),(0,o.kt)("h3",null,"Terminology"),(0,o.kt)("p",null,"In the following we use "),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"component")," to refer to a task/step in a workflow. "),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"workflow")," to mean a particular encoding of a set of steps"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"workflow instance")," to mean a particular execution of a ",(0,o.kt)("inlineCode",{parentName:"li"},"workflow"))),(0,o.kt)("h3",null,"Logging-In to the Cluster"),(0,o.kt)("p",null,"To run from a terminal you first need to login to the OpenShift cluster you want to run on. You can use user/password e.g."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"oc login -u $USERNAME $CLUSTER\n")),(0,o.kt)("p",null,"or copy the login command from the OpenShift console of the cluster you want to run in: "),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Navigate to the console, login,"),(0,o.kt)("li",{parentName:"ol"},"Click on your name in upper right corner  "),(0,o.kt)("li",{parentName:"ol"},"Click ",(0,o.kt)("inlineCode",{parentName:"li"},"Copy Login Command")),(0,o.kt)("li",{parentName:"ol"},"Paste the copied command into the terminal and run it")),(0,o.kt)("h2",null,"Running a Workflow"),(0,o.kt)("p",null,"Running from a terminal involves two steps"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Writing a short file in ",(0,o.kt)("inlineCode",{parentName:"li"},"YAML")," that describes the workflow you want to run  ",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"We call it ",(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("em",{parentName:"strong"},(0,o.kt)("inlineCode",{parentName:"em"},"workflow.yaml")))," here but you can call it anything"))),(0,o.kt)("li",{parentName:"ol"},"Executing ",(0,o.kt)("inlineCode",{parentName:"li"},"oc apply -f workflow.yaml"))),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/st4sd/st4sd-runtime-k8s/blob/main/examples/sum-numbers.yaml"},"Here")," is an example ",(0,o.kt)("inlineCode",{parentName:"p"},"yaml")," for launching the ",(0,o.kt)("inlineCode",{parentName:"p"},"sum-numbers")," toy workflow.  You can use this as a template for your writing your own workflow ",(0,o.kt)("inlineCode",{parentName:"p"},"yaml"),". ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/st4sd/st4sd-runtime-k8s/blob/main/docs/schema.md"},"This document")," gives a detailed description of all the available fields. "),(0,o.kt)("p",null,"You can also try running the ",(0,o.kt)("inlineCode",{parentName:"p"},"sum-numbers")," workflow via this ",(0,o.kt)("inlineCode",{parentName:"p"},"yaml")," "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"oc apply -f docs/examples/sum-numbers.yaml\n")),(0,o.kt)("p",null,"This currently assumes that various objects in the target ST4SD instance you want to run on have been named following the conventions outlined in the ",(0,o.kt)("a",{parentName:"p",href:"/overview/installation"},"ST4SD installation guide"),".  We hope to remove this requirement shortly.  "),(0,o.kt)("p",null,"If the above works it will create a ",(0,o.kt)("inlineCode",{parentName:"p"},"workflow object")," called ",(0,o.kt)("inlineCode",{parentName:"p"},"sn")," - this is determined by the value of the ",(0,o.kt)("inlineCode",{parentName:"p"},"name")," field in the workflow ",(0,o.kt)("inlineCode",{parentName:"p"},"yaml"),". "),(0,o.kt)("h3",null,"I get st4sd.ibm.com/sn unchanged"),(0,o.kt)("p",null,"This means someone already has run a workflow with the same name in the same instance of ST4SD. Execute"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"oc delete workflow sn\n")),(0,o.kt)("p",null,"to remove the old version and try the ",(0,o.kt)("inlineCode",{parentName:"p"},"apply")," command again. "),(0,o.kt)(k,{mdxType:"InlineNotification"},(0,o.kt)("p",null,"The ",(0,o.kt)("b",null,"oc delete")," command ",(0,o.kt)("b",null,"does not affect the files")," that the workflow instance has already generated under the persistent volume storage. However, it does trigger the workflow instance, and any components that are still running, to terminate. It also deletes any Kubernetes objects that have been created by the workflow instance. See ",(0,o.kt)("a",{href:"#querying-a-workflow-kubernetes-object"},"Querying a workflow kubernetes object")," for more information on retrieving the status of a workflow via ",(0,o.kt)("b",null,"oc"),".")),(0,o.kt)("h2",null,"Names and Labels"),(0,o.kt)("p",null,"Every kubernetes object has a name given by its ",(0,o.kt)("inlineCode",{parentName:"p"},"name")," field. This name must be unique as it identifies a specific object. Here will refer to the name of a workflow as ",(0,o.kt)("inlineCode",{parentName:"p"},"WORKFLOW_NAME")),(0,o.kt)("p",null,"A kubernetes object can also have arbitrary ",(0,o.kt)("inlineCode",{parentName:"p"},"labels")," associated with it. These are given as key-values under the ",(0,o.kt)("inlineCode",{parentName:"p"},"metadata.labels")," section in a workflow’s ",(0,o.kt)("inlineCode",{parentName:"p"},"yaml"),". For example in the ",(0,o.kt)("inlineCode",{parentName:"p"},"sum-numbers.yaml")," file we have:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"metadata:\n  labels:\n    rest-uid: sn\n    workflow: sn\n  name: sn\n")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"labels")," are useful for ",(0,o.kt)("strong",{parentName:"p"},"grouping")," of objects as they allow you to list all objects with particular label key-value pair."),(0,o.kt)("p",null,"All labels defined in the workflows ",(0,o.kt)("inlineCode",{parentName:"p"},"yaml")," are propagated to the pods the workflow creates. This allows us to find all pods created by a workflow instance, for example,  by asking for all pods who also have a label ",(0,o.kt)("inlineCode",{parentName:"p"},"workflow:sn"),". In this document we call the value of the ",(0,o.kt)("inlineCode",{parentName:"p"},"workflow")," field ",(0,o.kt)("inlineCode",{parentName:"p"},"WORKFLOW_ID")),(0,o.kt)("p",null,"From the example ",(0,o.kt)("inlineCode",{parentName:"p"},"yaml")," above ",(0,o.kt)("inlineCode",{parentName:"p"},"WORKFLOW_NAME")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"WORKFLOW_ID")," can be set independently. This is why we differentiate them. However ",(0,o.kt)("strong",{parentName:"p"},"by convention")," we assume they will be the same, as this makes life much easier!"),(0,o.kt)("h2",null,"Examining Virtual Experiments"),(0,o.kt)(m,{small:!0,mdxType:"AnchorLinks"},(0,o.kt)(u,{mdxType:"AnchorLink"},"Querying a Workflow Kubernetes Object"),(0,o.kt)(u,{mdxType:"AnchorLink"},"Examining a Components Logs"),(0,o.kt)(u,{mdxType:"AnchorLink"},"Examining a Components Output Directory")),(0,o.kt)("h3",null,"Querying a Workflow Kubernetes Object"),(0,o.kt)("p",null,"Once you’ve started a workflow try the following commands"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"oc get workflows"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Lists all workflows and displays their status (running, finished, failed, or an empty string for workflows which have not started running yet)."))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"oc get workflow $WORKFLOW_NAME -o yaml")," ",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Returns the ",(0,o.kt)("inlineCode",{parentName:"li"},"yaml")," of the workflow along with current status etc."),(0,o.kt)("li",{parentName:"ul"},"Example: ",(0,o.kt)("inlineCode",{parentName:"li"},"oc get workflow sn -o yaml")))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"oc describe workflow $WORKFLOW_NAME")," ",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"This gives a similar, but shorter, output to ",(0,o.kt)("inlineCode",{parentName:"li"},"get")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Importantly")," it also returns the ",(0,o.kt)("strong",{parentName:"li"},"EVENTS")," associated with the created object - this is a primary way to ",(0,o.kt)("a",{parentName:"li",href:"#debugging-a-workflow-component"},"debug issues"),"."))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"oc get pods -l workflow=$WORKFLOW_ID "),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Lists all the pods in the workflow"),(0,o.kt)("li",{parentName:"ul"},"Example: ",(0,o.kt)("inlineCode",{parentName:"li"},"oc get pods -l workflow=sn")),(0,o.kt)("li",{parentName:"ul"},"The argument ",(0,o.kt)("inlineCode",{parentName:"li"},"-l")," means ",(0,o.kt)("inlineCode",{parentName:"li"},"has this label key-value pair"))))),(0,o.kt)("p",null,"When you list the pods of a workflow instance you will see one that is also called ",(0,o.kt)("inlineCode",{parentName:"p"},"WORKFLOW_NAME")," - this is the primary pod of the instance. Pods for other workflow components that use the Kubernetes backend are called ",(0,o.kt)("inlineCode",{parentName:"p"},"flow-$STAGE-$COMPONENT_NAME-$UNIQUEID")),(0,o.kt)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"699px"}},"\n      ",(0,o.kt)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"38.888888888888886%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAICAIAAAB2/0i6AAAACXBIWXMAAAsTAAALEwEAmpwYAAABSUlEQVQY0z2Q266CMBBF+f9vM9EgLaU3EFSslFJoYWog6Yk2OetpP8zamezs9XotywIA3vt5nq21wzCkoLVumuZ6vWqtMcZt2yqlns/nOI4hhPf7nVlrnXPTNDnn5nn23ltr1x8xRmttOs3zvK7raZqWZTmOI4RQFEUmpWSMIYSEEIyxqqryPMcY13WdZGttCAEhxBhLRTHGEAIhJLvf71VVCSGklEKIuq4ppRhjzvmyLPM8G2MAoCgKzvm/vK7r4/H4ymVZdl0npWyapm1bQghjjFLqfhhj0pNCiJRjjN57pVTWdV1ZlrfbTf7gnCOEOOdVVSV5mqYkc87/5W3bvoMJIc7nM6WUEIIQIoRcLpcU0oRaawA4nU4IoWEYACDJfd9/11ZKGWO01sOPcRwB4DiOGCMAbNu273vf91rrdV33fY8xfj4f59wfuuW0w1sYPAUAAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,o.kt)("picture",{parentName:"span"},"\n          ",(0,o.kt)("source",{parentName:"picture",srcSet:["/overview/static/618d899218ce9cc2f4bdb390b32d3968/0eda2/sn-pods-screenshot.webp 288w","/overview/static/618d899218ce9cc2f4bdb390b32d3968/460e2/sn-pods-screenshot.webp 576w","/overview/static/618d899218ce9cc2f4bdb390b32d3968/ac9cb/sn-pods-screenshot.webp 699w"],sizes:"(max-width: 699px) 100vw, 699px",type:"image/webp"}),"\n          ",(0,o.kt)("source",{parentName:"picture",srcSet:["/overview/static/618d899218ce9cc2f4bdb390b32d3968/7fc1e/sn-pods-screenshot.png 288w","/overview/static/618d899218ce9cc2f4bdb390b32d3968/a5df1/sn-pods-screenshot.png 576w","/overview/static/618d899218ce9cc2f4bdb390b32d3968/ff88f/sn-pods-screenshot.png 699w"],sizes:"(max-width: 699px) 100vw, 699px",type:"image/png"}),"\n          ",(0,o.kt)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/overview/static/618d899218ce9cc2f4bdb390b32d3968/ff88f/sn-pods-screenshot.png",alt:"Pods of the sn workflow instance",title:"Pods of the sn workflow instance",loading:"lazy",decoding:"async",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"}}),"\n        "),"\n    "),(0,o.kt)("h3",null,"Examining a Components Logs"),(0,o.kt)("p",null,"Getting the logs of a task is straight-forward:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"oc logs POD_NAME")," ",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"This outputs the logs of the container running in POD_NAME e.g. ",(0,o.kt)("inlineCode",{parentName:"li"},"oc logs flow-stage1-partialsum2-12290339-dc5vw"))))),(0,o.kt)("h3",null,"Examining a Components Output Directory"),(0,o.kt)("p",null,"All components in a workflow write their output under a directory tree on the target cluster which you can login to and browse around with a terminal.  The key piece of information you need here is the ",(0,o.kt)("inlineCode",{parentName:"p"},"INSTANCE_NAME")," of the executing instance of the workflow, which is also the name of the root of the directory tree. To get this run: "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"oc describe workflow sn | grep instanceName\n")),(0,o.kt)("p",null,"This will give output like:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"instanceName: sum-numbers-2021-02-09T133047.732342.instance\n")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"sum-numbers-2021-02-09T133047.732342.instance")," is the ",(0,o.kt)("inlineCode",{parentName:"p"},"INSTANCE_DIR_NAME")),(0,o.kt)("p",null,"Then you can do:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"oc exec $WORKFLOW_NAME -c elaunch-primary /bin/bash"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Start a shell session in the primary pod of the workflow. From here you can ",(0,o.kt)("inlineCode",{parentName:"li"},"cd")," to the directory at ",(0,o.kt)("inlineCode",{parentName:"li"},"$INSTANCE_DIR_NAME"),". ",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"e.g you can run ",(0,o.kt)("inlineCode",{parentName:"li"},"cd /tmp/workdir/$INSTANCE_DIR_NAME")))),(0,o.kt)("li",{parentName:"ul"},"The output of a workflow component called ",(0,o.kt)("inlineCode",{parentName:"li"},"COMPONENT_NAME")," in stage X will be at ",(0,o.kt)("inlineCode",{parentName:"li"},"stages/stageX/COMPONENT_NAME")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"This only works while the pod is executing")," "))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"oc debug $WORKFLOW_NAME -c elaunch-primary")," ",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Start a shell session in a copy of the primary pod of the workflow. From here you can browse to the workflow directory at ",(0,o.kt)("inlineCode",{parentName:"li"},"INSTANCE_DIR_NAME")," like above"),(0,o.kt)("li",{parentName:"ul"},"e.g you can run ",(0,o.kt)("inlineCode",{parentName:"li"},"cd /tmp/workdir/$INSTANCE_DIR_NAME")),(0,o.kt)("li",{parentName:"ul"},"Tip: The default shell will be ",(0,o.kt)("inlineCode",{parentName:"li"},"sh"),", however the primary pod also has ",(0,o.kt)("inlineCode",{parentName:"li"},"bash")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Use this if the pod has finished")))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"oc exec $WORKFLOW_NAME -c elaunch-primary -- einspect.py $INSTANCE_DIR_NAME"),": ",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Returns a detailed list of the state of the workflow components")))),(0,o.kt)("h2",null,"Debugging"),(0,o.kt)(m,{small:!0,mdxType:"AnchorLinks"},(0,o.kt)(u,{mdxType:"AnchorLink"},"Debugging a Workflow Component"),(0,o.kt)(u,{mdxType:"AnchorLink"},"Debug Tools Available in the primary Pod")),(0,o.kt)("h3",null,"Debugging a Workflow Component"),(0,o.kt)("p",null,"Your first step in checking if there is an issue is to run ",(0,o.kt)("inlineCode",{parentName:"p"},"oc describe")," e.g. ",(0,o.kt)("inlineCode",{parentName:"p"},"oc describe workflow WORKFLOW_NAME")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"oc describe pod WORKFLOW_NAME"),". This allows you to check for example:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"If the pod was scheduled"),(0,o.kt)("li",{parentName:"ul"},"If the pods image was pulled"),(0,o.kt)("li",{parentName:"ul"},"Any issues with mounts"),(0,o.kt)("li",{parentName:"ul"},"If the pod went out-of-memory")),(0,o.kt)("p",null,"If you want to debug deeper you can use"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"oc debug $PODNAME"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"This starts a shell in a copy of ",(0,o.kt)("inlineCode",{parentName:"li"},"$PODNAME"),".  Use this if you want to debug the image the pod was using. "))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"oc debug $WORKFLOW_NAME -c elaunch-primary")," ",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Start a shell in a copy of the primary pod of the workflow (same environment, mounts etc.)"),(0,o.kt)("li",{parentName:"ul"},"As noted above you can browse to the workflow directory at ",(0,o.kt)("inlineCode",{parentName:"li"},"INSTANCE_NAME")," however you also get access to three useful debug tools")))),(0,o.kt)("h3",null,"Debug Tools Available in the primary Pod"),(0,o.kt)("p",null,"If you start a shell in the primary pod, via ",(0,o.kt)("inlineCode",{parentName:"p"},"exec")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"debug")," you can run the following tools. First ",(0,o.kt)("inlineCode",{parentName:"p"},"cd")," to the workflow instance directory at ",(0,o.kt)("inlineCode",{parentName:"p"},"INSTANCE_NAME")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"ccommand.py"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"This prints the command line for a component. "),(0,o.kt)("li",{parentName:"ul"},"Useful to check what was actually executed is what you thought it was"),(0,o.kt)("li",{parentName:"ul"},"Example: ",(0,o.kt)("inlineCode",{parentName:"li"},"ccommand.py -s0 MyComponent")))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"einspect.py"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"The prints the state of all the workflow components e.g. who failed, restarted etc. "),(0,o.kt)("li",{parentName:"ul"},"By default, it only prints components with issues"),(0,o.kt)("li",{parentName:"ul"},"Example: ",(0,o.kt)("inlineCode",{parentName:"li"},"einspect -f all"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Prints status info on all components"))))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"cexecute.py"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Executes a component. In case of kubernetes use to reexecute any pod of any component. The same workdir will be used"),(0,o.kt)("li",{parentName:"ul"},"Example: ",(0,o.kt)("inlineCode",{parentName:"li"},"cexecute.py -f -s0 MyComponent"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Note the ",(0,o.kt)("inlineCode",{parentName:"li"},"-f")," causes a new pod to be spawned. If you don’t specify it, ST4SD will try to execute ",(0,o.kt)("inlineCode",{parentName:"li"},"MyComponent")," in the primary pod, which will usually fail due to necessary programs not being present.")))))),(0,o.kt)("h2",null,"Switching from Notebook to Commandline"),(0,o.kt)("p",null,"When you use the RESTApi via notebook to start a workflow it automates the creation of a workflow ",(0,o.kt)("inlineCode",{parentName:"p"},"yaml")," as described above. Hence, you can still use the command line to work with it. "),(0,o.kt)("p",null,"However note the reverse is not fully true. If you launch from the terminal:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"you cannot use the start/stop/status functions in the notebook - the workflow is not registered with the RESTApi"),(0,o.kt)("li",{parentName:"ul"},"you ",(0,o.kt)("em",{parentName:"li"},"can")," use the ",(0,o.kt)("inlineCode",{parentName:"li"},"st4sd-datastore")," commands")),(0,o.kt)("p",null,"To work with the command line all you need is to ",(0,o.kt)("inlineCode",{parentName:"p"},"REST UID")," returned when you submitted the workflow from the notebook. This will be the ",(0,o.kt)("inlineCode",{parentName:"p"},"WORKFLOW_NAME")," and the ",(0,o.kt)("inlineCode",{parentName:"p"},"WORKFLOW_ID")," of the workflow instance."),(0,o.kt)("h2",null,"Managing Workflows"),(0,o.kt)(m,{small:!0,mdxType:"AnchorLinks"},(0,o.kt)(u,{mdxType:"AnchorLink"},"List and Sort"),(0,o.kt)(u,{mdxType:"AnchorLink"},"Deleting")),(0,o.kt)("p",null,"The number of Workflows and associated Job and Pod objects in a namespace can easily reach O(1000) and higher.\nThis section describes how to examine, sort and delete these objects."),(0,o.kt)("h3",null,"List and Sort"),(0,o.kt)("p",null,"By default ",(0,o.kt)("inlineCode",{parentName:"p"},"oc get wf")," only lists workflows name and experiment state in alphabetical order of Name. However this can easily be customized"),(0,o.kt)(k,{mdxType:"InlineNotification"},'This document assumes that there is only one kind of "Workflow" object on your cluster. If there are multiple CustomResourceDefinitions that introduce the Workflow object then you must use the full qualifier of the Workflow kind. Instead of "oc get wf" you should run "oc get wf.st4sd.ibm.com" (or the shorter form "oc get wc.st4sd").'),(0,o.kt)("h4",null,"List workflows with custom-columns showing creation date, exit status and state"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'oc get wf --output custom-columns="NAME:metadata.name,AGE:metadata.creationTimestamp,EXIT-STATUS:status.exitstatus,STATE:status.experimentstate"\n')),(0,o.kt)("p",null,"You can create a column for any data in the workflow objects YAML using the appropriate key-path."),(0,o.kt)("h4",null,"Sort workflows by creation date"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'oc --sort-by=".metadata.creationTimestamp" get wf\n')),(0,o.kt)("p",null,"Similarly you can sort workflow by any data in the workflow objects YAML using the appropriate key-path."),(0,o.kt)("p",null,"Combining the above you can list workflows showing creation data, exist-status and state sorted by date"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'oc --sort-by=".metadata.creationTimestamp" get wf --output custom-columns="NAME:metadata.name,AGE:metadata.creationTimestamp,EXIT-STATUS:status.exitstatus,STATE:status.experimentstate"\n')),(0,o.kt)("h3",null,"Deleting"),(0,o.kt)("p",null,"The following commands illustrate how you can delete workflow objects\nThis also deletes all Job and Pod objects associated with the workflow"),(0,o.kt)(k,{mdxType:"InlineNotification"},(0,o.kt)("p",null,"Deleting a Workflow object does not delete the data created by the workflow.\nThe output folder will still exist and the output is still accessible via the st4sd-datastore python API.")),(0,o.kt)(k,{kind:"warning",mdxType:"InlineNotification"},(0,o.kt)("p",null,"Deleting the workflow object will delete it from st4sd-runtime-service: st4sd-runtime-service API\ncalls using the deleted workflows rest-uid will not work.")),(0,o.kt)(k,{mdxType:"InlineNotification"},(0,o.kt)("p",null,"When deleting Workflows it’s worth reviewing the meaning of experiment-state and exit-status ",(0,o.kt)("a",{parentName:"p",href:"/overview/running-workflows-on-openshift#getting-the-status-of-a-virtual-experiment-instance"},"here"))),(0,o.kt)("h4",null,"Delete all workflows whose experiment-state is ",(0,o.kt)("inlineCode",{parentName:"h4"},"finished")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"oc get wf | awk '/finished/{print $1}' | xargs oc delete wf\n")),(0,o.kt)("h4",null,"Delete all workflows whose experiment-state is ",(0,o.kt)("inlineCode",{parentName:"h4"},"failed")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"oc get wf | awk '/failed/{print $1}' | xargs oc delete wf\n")),(0,o.kt)("h4",null,"Delete all workflows whose exist-status is failed"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"oc get wf --output custom-columns=\"NAME:metadata.name,EXIT-STATUS:status.exitstatus\" | awk '/Failed/{print $1}' | xargs oc delete wf\n")),(0,o.kt)("h4",null,"Delete component Job and Pod objects associated with workflows whose experiment-state is ",(0,o.kt)("inlineCode",{parentName:"h4"},"finished")),(0,o.kt)("p",null,"The oneliner below will not delete the Pod objects that contain the ",(0,o.kt)("inlineCode",{parentName:"p"},"elaunch-primary")," container (i.e. the entrypoint Pod of the virtual experiment instance).\nThe code just deletes all Job and Pod objects that ",(0,o.kt)("inlineCode",{parentName:"p"},"elaunch-primary")," created to run the tasks of components.\nAfter running it, you will still be able to run ",(0,o.kt)("inlineCode",{parentName:"p"},"oc debug $WORKFLOW_NAME"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"oc get wf | awk '/finished/{print $1}' | xargs -n1 -I {} oc delete job -lworkflow={}\n")),(0,o.kt)("h4",null,"Delete all workflows whose name starts with ",(0,o.kt)("inlineCode",{parentName:"h4"},"homolumo")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"oc get wf | awk '/homolumo/{print $1}' | xargs oc delete wf\n")),(0,o.kt)(k,{kind:"info",mdxType:"InlineNotification"},"Future versions of ST4SD will contain utilities to automate garbage collection of Kubernetes objects."))}h.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-running-ve-via-terminal-mdx-4a8ad3d41fba51dc197c.js.map