/**
 * Copyright 2015, Yahoo! Inc.
 * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
 */

// external packages
import React from 'react';

// other dependencies
import Reference from './Reference';

class PageReference extends React.Component {
    render() {
        return (
            <div id="reference" role="main" className="reference-page innerwrapper Mb(50px) Mx(10px) Maw(1000px)--sm Mx(a)--sm W(90%)--sm">
                <h1>Reference</h1>
                <p>Use this page to search for <a href="#atomic-classes">Atomic</a> and <a href="#helper-classes">Helper</a> classes.</p> 
                <p>You can also <a href="/guides/syntax.html">learn about the syntax</a>, <a href="/guides/syntax.html#examples-">look at some examples</a>, <a href="/guides/atomic-classes.html">learn about custom classes</a>, or <a href="/guides/helper-classes.html">learn about helper/utility classes</a>.  
                   There is also <a href="/guides/atomizer.html#web-tools">a handy web tool</a> to help you experiment with Atomizer syntax.
                </p>
                <Reference />
            </div>
        );
    }
}

export default PageReference;
