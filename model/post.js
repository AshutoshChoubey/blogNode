const mongoose=require('mongoose');
const Schema=mongoose.Schema;
// Create the User Schema
const PostSchema = new Schema({
    userId: {
        type: Number,
        required: true,
        default: 1,
    },
    title: {
        type: String,
        required: true,
    },
     description: {
        type: String,
    },
    keywords: {
        type: String,
    },
     subject: {
        type: String,
    },
     topic: {
        type: String,
    },
    summary: {
        type: String,
    },
     author: {
        type: String,
    },
     category: {
        type: Number,
    },
     sub_Category: {
        type: Number,
    },
     image: {
        type: String,
    },
    post: {
        type: String,
    },
    slug: {
        type: String,
        unique: true,
    },
    createdDate: {
        type: Date,
        default: Date.now
    },
    updatedDate: {
        type: Date,
        default: null
    },
    deletedDate: {
        type: Date,
        default: null
    }
});
module.exports = Post = mongoose.model('posts', PostSchema);

// var posttObj = new Post({
//     title: "Installation?",
//     description: "description",
//     keywords:"keywords",
//     subject:"Lorem Ipsum subject",
//     topic: "Lorem Ipsum topic",
//     summary:"Lorem Ipsum summary",
//     author:"Ashutosh Kumar Choubey",
//     category:1,
//     sub_Category:1,
//     slug:"dfgdf",
//     image:"./google.jpg",
//     post:`It is also possible to use ejs.render(dataAndOptions); where you pass everything in a single object. In that case, you'll end up with local variables for all the passed options. However, be aware that your code could break if we add an option with the same name as one of your data object's properties. Therefore, we do not recommend using this shortcut.

//     Options
//     cache Compiled functions are cached, requires filename
//     filename The name of the file being rendered. Not required if you are using renderFile(). Used by cache to key caches, and for includes.
//     root Set project root for includes with an absolute path (/file.ejs).
//     context Function execution context
//     compileDebug When false no debug instrumentation is compiled
//     client When true, compiles a function that can be rendered in the browser without needing to load the EJS Runtime (ejs.min.js).
//     delimiter Character to use with angle brackets for open/close
//     debug Output generated function body
//     strict When set to true, generated function is in strict mode
//     _with Whether or not to use with() {} constructs. If false then the locals will be stored in the locals object. Set to false in strict mode.
//     destructuredLocals An array of local variables that are always destructured from the locals object, available even in strict mode.
//     localsName Name to use for the object storing local variables when not using with Defaults to locals
//     rmWhitespace Remove all safe-to-remove whitespace, including leading and trailing whitespace. It also enables a safer version of -%> line slurping for all scriptlet tags (it does not strip new lines of tags in the middle of a line).
//     escape The escaping function used with <%= construct. It is used in rendering and is .toString()ed in the generation of client functions. (By default escapes XML).
//     outputFunctionName Set to a string (e.g., 'echo' or 'print') for a function to print output inside scriptlet tags.
//     async When true, EJS will use an async function for rendering. (Depends on async/await support in the JS runtime.
//     This project uses JSDoc. For the full public API documentation, clone the repository and run npm run doc. This will run JSDoc with the proper options and output the documentation to out/. If you want the both the public & private API docs, run npm run devdoc instead.
    
//     Tags
//     <% 'Scriptlet' tag, for control-flow, no output
//     <%_ 'Whitespace Slurping' Scriptlet tag, strips all whitespace before it
//     <%= Outputs the value into the template (escaped)
//     <%- Outputs the unescaped value into the template
//     <%# Comment tag, no execution, no output
//     <%% Outputs a literal '<%'
//     %%> Outputs a literal '%>'
//     %> Plain ending tag
//     -%> Trim-mode ('newline slurp') tag, trims following newline
//     _%> 'Whitespace Slurping' ending tag, removes all whitespace after it
//     For the full syntax documentation, please see docs/syntax.md.
    
//     Includes
//     Includes either have to be an absolute path, or, if not, are assumed as relative to the template with the include call. For example if you are including ./views/user/show.ejs from ./views/users.ejs you would use <%- include('user/show') %>.
    
//     You must specify the filename option for the template with the include call unless you are using renderFile().
    
//     You'll likely want to use the raw output tag (<%-) with your inclu`
// });

// posttObj.save((error, savedPost) => {
//     if (error) {
//         console.log(error);
//         }else{
//             console.log(savedPost);
//         }

// })
