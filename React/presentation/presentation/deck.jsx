import React from "react/addons";

import {
  Appear, BlockQuote, Cite, CodePane, Deck, Fill,
  Heading, Image, Layout, Link, ListItem, List, Quote, Slide, Text
} from "../src/spectacle";

import preloader from "../src/utils/preloader";

import Interactive from "./interactive";
import Styles1 from "./styles1";
import Styles2 from "./styles2";

export default class extends React.Component {
  render() {
    return (
      <Deck transition={["zoom", "slide"]} transitionDuration={800}>
        <Slide transition={["zoom"]} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="black">
            Styles
          </Heading>
          <Text bold caps textColor="tertiary">Download files on Github</Text>
          <Text textSize="1.5em" margin="20px 0px 0px" bold>https://github.com/briannhinton/Misc</Text>
        </Slide>
        <Slide transition={['slide']} bgColor="primary" notes="You can even put notes on your slide. How awesome is that?">
          <Heading size={1} fit textColor="secondary" textFont="secondary">
            What I've learned?
          </Heading>
          <List>
            <ListItem><Appear fid="1">There's no single right way to style.</Appear></ListItem>
            <ListItem><Appear fid="2">Go with what works for us.</Appear></ListItem>
            <ListItem><Appear fid="3">Go with simple, but flexible.</Appear></ListItem>
          </List>
        </Slide>
        <Slide transition={['slide']} bgColor="primary" notes="You can even put notes on your slide. How awesome is that?">
          <Heading size={1} fit textColor="secondary" textFont="secondary">
            What are our options?
          </Heading>
          <List>
            <ListItem><Appear fid="1">Old School Styling.</Appear></ListItem>
            <ListItem><Appear fid="2">Old School Styling with Preprocessors.</Appear></ListItem>
            <ListItem><Appear fid="3">The React Way!</Appear></ListItem>
            <ListItem><Appear fid="4">A combination of the above.</Appear></ListItem>
          </List>
        </Slide>
        <Slide transition={['slide']} bgColor="black" notes="You can even put notes on your slide. How awesome is that?">
          <Heading size={1} fit textColor="primary" textFont="secondary">
            Old School Styling
          </Heading>
          <Text textSize="1.5em" margin="20px 0px 0px" bold textColor="tertiary">Let’s think about how traditionally web pages have been split up in markup:<br />
(HTML), styling (CSS) and logic (JavaScript).
<br /><br />
Even though this sounds simple in practice, there are overlaps. We might trigger CSS animations through JavaScript. As we know React provides a component oriented way of development. This in turn allows us to question some of our beliefs.
</Text>
        </Slide>
        <Slide transition={['slide']} bgColor="black" notes="You can even put notes on your slide. How awesome is that?">
          <Heading size={1} fit textColor="primary" textFont="secondary">
            Old School Styling
          </Heading>
          <Text textSize="1.5em" margin="20px 0px 0px" bold textColor="tertiary">The old school approach to styling involves using ids and classes on our elements, then to set up rules and hope for the best.
<br /> <br />
Although this can work up to an extent it gets more complicated as development goes on. By default, everything is global in CSS. Furthermore nesting definitions (e.g., .container .sidebar .button) creates implicit logic to your styling.
</Text>
        </Slide>
        <Slide transition={['slide']} bgColor="black" notes="You can even put notes on your slide. How awesome is that?">
          <Heading size={1} fit textColor="primary" textFont="secondary">
            Webpack and Vanilla CSS
          </Heading>
          <Text textSize="1.5em" margin="20px 0px 0px" bold>As we have seen it is easy to configure vanilla CSS in Webpack:</Text>
            <CodePane
              lang="javascript"
              source={require("raw!./vanilla.example")}
              margin="20px auto"/>
        </Slide>
        <Slide transition={['slide']} bgColor="black" notes="You can even put notes on your slide. How awesome is that?">
          <Heading size={1} fit textColor="primary" textFont="secondary">
            Vanilla CSS in a component
          </Heading>
          <Text textSize="1.5em" margin="20px 0px 0px" bold>And this is how we reference external Vanilla Styles:
</Text>
            <CodePane
              lang="javascript"
              source={require("raw!./vanillacomponent.example")}
              margin="20px auto"/>
        </Slide>
        <Slide transition={["slide"]} bgColor="primary">
          <Heading size={1} fit textColor="secondary" textFont="secondary">
            Pros to Vanilla CSS?
          </Heading>
          <List>
            <ListItem textSize="1.5em"><Appear fid="1">Vanilla CSS can be useful for optimizing application loading. You avoid unnecessary requests while providing a slightly bigger payload. Small improvements can yield large benefits if you depend on a lot of small resources at your style definitions.</Appear></ListItem>
            <ListItem textSize="1.5em"><Appear fid="2">Styles located in one global place. This is also a negative as we have to deal with scope.</Appear></ListItem>
            <ListItem textSize="1.5em"><Appear fid="3">We could utilize existing LESS styling (more on LESS in a bit.)</Appear></ListItem>
          </List>
        </Slide>
        <Slide transition={["zoom", "fade"]} bgColor="primary">
          <Heading caps fit>Preprocessors</Heading>
          <Layout>
            <Fill>
              <Heading size={4} caps textColor="secondary" bgColor="white" margin={10}>
                SASS
              </Heading>
              <Heading size={4} caps textColor="secondary" bgColor="white" margin={10}>
                LESS
              </Heading>
            </Fill>
            <Fill>
              <Heading size={4} caps textColor="secondary" bgColor="white" margin={10}>
                cssnext
              </Heading>
              <Heading size={4} caps textColor="secondary" bgColor="white" margin={10}>
                Stylus
              </Heading>
            </Fill>
          </Layout>
        </Slide>
        <Slide transition={['slide']} bgColor="black" notes="You can even put notes on your slide. How awesome is that?">
          <Heading size={4} textColor="primary" textFont="secondary">
            SASS
          </Heading>
          <Text textSize="1.5em" textColor="tertiary" margin="20px 0px 0px" bold>Sass is a popular alternative to Less. We should use sass-loader with it. Installing node-sass to our projects is necessary as the loader has a peer dependency on that. Webpack doesn't take much configuration:</Text>
            <CodePane
              lang="javascript"
              source={require("raw!./sass.example")}
              margin="20px auto"/>
        </Slide>
        <Slide transition={['slide']} bgColor="black" notes="You can even put notes on your slide. How awesome is that?">
          <Heading size={4} textColor="primary" textFont="secondary">
            LESS
          </Heading>
          <Text textSize="1.5em" textColor="tertiary" margin="20px 0px 0px" bold>In Webpack using Less doesn't take a lot of effort. less-loader deals with the heavy lifting:</Text>
            <CodePane
              lang="javascript"
              source={require("raw!./less.example")}
              margin="20px auto"/>
            <Text textSize="1.5em" textColor="tertiary" margin="20px 0px 0px" bold>There is also support for Less plugins, sourcemaps and so on.
      </Text>
        </Slide>
        <Slide transition={['slide']} bgColor="black" notes="You can even put notes on your slide. How awesome is that?">
          <Heading size={4} textColor="primary" textFont="secondary">
            cssnext
          </Heading>
          <Text textSize="1.5em" textColor="tertiary" margin="20px 0px 0px" bold>In Webpack it is simply a matter of installing cssnext-loader and attaching it to our CSS configuration. In our case, we would end up with something like the following:
</Text>
            <CodePane
              lang="javascript"
              source={require("raw!./cssnext.example")}
              margin="20px auto"/>
            <Text textSize="1.5em" textColor="tertiary" margin="20px 0px 0px" bold>The advantage of cssnext is that we will literally be coding in the future. cssnext relies on postcss. It provides us with a more granular level of control of CSS with variables, plugins, etc. See <u>http://cssnext.io</u> for details.
      </Text>
        </Slide>
        <Slide transition={["slide"]} bgColor="black">
          <Heading size={3} fit textColor="primary" textFont="secondary">
            Pros to Preprocessors?
          </Heading>
          <Text textSize="1.5em" textColor="tertiary" margin="20px 0px 0px" bold>
                Compared to vanilla CSS, preprocessors bring a lot to the table. They deal with certain annoyances (e.g., autoprefixing) and provide useful features. Particularly cssnext and postcss seem future proof alternatives. That said, we can see value in other preprocessors as they are established and well understood projects.
            </Text>
        </Slide>
        <Slide transition={["slide"]} bgColor="black">
          <Heading size={1} fit textColor="primary" textFont="secondary">
            Now we get to the "React Way"
          </Heading>
          <Text textSize="1.5em" textColor="tertiary" margin="20px 0px 0px" bold>
              With React we have some additional alternatives. What if the way we've been thinking about styling has been misguided? CSS is powerful, but it can become an unmaintainable mess without some discipline. Where to draw the line between CSS and JavaScript?
          <br /> <br />
              There are various approaches for React that allow us to push styling to component level. It may sound heretical. React, being an iconoclast, may lead the way here.
         <br /> <br />
               Ironically the way React solves styling is through inline styles. Getting rid of inline styles was one of the main reasons for using separate CSS files in the first place.
            </Text>
        </Slide>
        <Slide transition={["slide", "spin"]} bgColor="black" notes="You can even put notes on your slide. How awesome is that?">
          <Heading size={4} textColor="primary" textFont="secondary">
            Inline Styles to Rescue
          </Heading>
          <Text textSize="1.5em" textColor="tertiary" margin="20px 0px 0px" bold>Inline styles in React are placed into an object. We reference the styles via the assigned variable.</Text>
            <CodePane
              lang="javascript"
              source={require("raw!./reactinline.example")}
              margin="20px auto"/>
        </Slide>
        <Slide transition={["slide", "spin"]} bgColor="primary">
          <Heading caps fit size={1} textColor="tertiary">
            Demo
          </Heading>
        </Slide>
        <Slide transition={["slide", "spin"]} bgColor="black" notes="You can even put notes on your slide. How awesome is that?">
          <Text textSize="1.5em" textColor="tertiary" margin="20px 0px 0px" bold>Open webpack component and in src/components/external.js. Run npm install, npm test, and then npm start. It should look like below:</Text>
            <CodePane
              lang="javascript"
              source={require("raw!./base.example")}
              margin="20px auto"/>
        </Slide>
        <Slide transition={["slide", "spin"]} bgColor="black" notes="You can even put notes on your slide. How awesome is that?">
          <Text textSize="1.5em" textColor="tertiary" margin="20px 0px 0px" bold>Now we add a styles object into this file. We reference the object on the styles attribute. It should look like below:</Text>
            <CodePane
              lang="javascript"
              source={require("raw!./styles1.example")}
              margin="20px auto"/>
        </Slide>
        <Slide transition={["slide"]} bgColor="primary">
          <Heading size={1} caps fit textColor="tertiary">
            The result will be below:
          </Heading>
          <Styles1 content="Hello world!"/>
        </Slide>
        <Slide transition={["slide", "spin"]} bgColor="black" notes="You can even put notes on your slide. How awesome is that?">

          <Text textSize="1.5em" textColor="tertiary" margin="20px 0px 0px" bold>
Next we illustrate how you can nest styles within the object, and add variables.
            It should look like below:</Text>
            <CodePane
              lang="javascript"
              source={require("raw!./styles2.example")}
              margin="20px auto"/>
        </Slide>
        <Slide transition={["slide"]} bgColor="primary">
          <Heading size={1} caps fit textColor="tertiary">
            The result will be below:
          </Heading>
          <Styles2 content="Hello world!"/>
        </Slide>
        <Slide transition={["slide", "spin"]} bgColor="black" notes="You can even put notes on your slide. How awesome is that?">

          <Text textSize="1.5em" textColor="tertiary" margin="20px 0px 0px" bold>
The final example for React Styles involves referencing the object externally. Place the below contents into a styles.js file in the components directory.</Text>
            <CodePane
              lang="javascript"
              source={require("raw!./styles3.example")}
              margin="20px auto"/>
        </Slide>
        <Slide transition={["slide", "spin"]} bgColor="black" notes="You can even put notes on your slide. How awesome is that?">

          <Text textSize="1.5em" textColor="tertiary" margin="20px 0px 0px" bold>
Then we import the styles object from ./styles and reference it in the same way.</Text>
            <CodePane
              lang="javascript"
              source={require("raw!./styles3b.example")}
              margin="20px auto"/>
        </Slide>
        <Slide transition={['slide']} bgColor="black" notes="You can even put notes on your slide. How awesome is that?">
          <Heading size={4} textColor="primary" textFont="secondary">
            Inline Styles to Rescue
          </Heading>
          <Text textSize="1.5em" textColor="tertiary" margin="20px 0px 0px" bold>Like with HTML attribute names, we are using the same camelcase convention for CSS properties.
<br /><br />
Note that now that we have styling at component level we can implement logic touching it easily. One classic way to do this has been to alter class name based on the outlook we want. Now we can adjust the properties we want directly.
<br /><br />
Styles render inline, and they are self contained within the component no cascade issues due to scope being limited to component.
</Text>
        </Slide>
        <Slide transition={['slide']} bgColor="black" notes="You can even put notes on your slide. How awesome is that?">
          <Heading size={4} textColor="primary" textFont="secondary">
            Negatives to this method?
          </Heading>
          <Text textSize="1.5em" textColor="tertiary" margin="20px 0px 0px" bold>We have lost something in process, though. It is going to be difficult to perform large, sweeping changes to our codebase as we need to tweak a lot of components to achieve that.
<br /><br />
We can try to work against this by injecting a part of styling through props. A component could provide patch its style based on provided one. This can be improved further by coming up with conventions that allow parts of style configuration mapped to some specific part. Basically we just reinvented selectors on a small scale.
<br /><br />
Things like media queries, and pseudoselectors also aren’t available with this approach.
</Text>
        </Slide>
        <Slide transition={['slide']} bgColor="black" notes="You can even put notes on your slide. How awesome is that?">
          <Heading size={4} textColor="primary" textFont="secondary">
            How to solve the negatives?
          </Heading>
          <Text textSize="1.5em" textColor="tertiary" margin="20px 0px 0px" bold>People have created libraries to solve some of these issues.
          <br /><br />
            Basic features of these libraries are:<br />
            Autoprefixing - for border, animation, flex, ...<br />
            Pseudo classes - :hover, :active, ...<br />
            Media queries - @media (max-width: 200px), ...<br />
            Styles as Object Literals<br />
            CSS style extraction<br />
          <br /><br />
            Let’s explore some of the available libraries.

          </Text>
        </Slide>
        <Slide transition={["slide", "spin"]} bgColor="black" notes="You can even put notes on your slide. How awesome is that?">

          <Text textSize="1.5em" textColor="tertiary" margin="20px 0px 0px" bold>
            React Style uses the same syntax as React Native StyleSheet. It expands the basic definition by introducing additional keys for fragments.</Text>
            <CodePane
              lang="javascript"
              source={require("raw!./reactstyle.example")}
              margin="20px auto"/>
        </Slide>
        <Slide transition={["slide"]} bgColor="primary">
          <Heading size={4} textColor="primary" textFont="secondary">
            React Style
          </Heading>
          <List>
            <ListItem textSize="1.5em"><Appear fid="1">Media queries are supported.
</Appear></ListItem>
            <ListItem textSize="1.5em"><Appear fid="2">React Style expects that you manipulate browser states (e.g., :hover) through JavaScript.  Pseudoselectors are not supported.</Appear></ListItem>
            <ListItem textSize="1.5em"><Appear fid="3">CSS animations won't work. Instead, it's preferred to use some other solution for that. (ie. React Magic: https://github.com/reactjs/react-magic)</Appear></ListItem>
            <ListItem textSize="1.5em"><Appear fid="4">There is a React Style plugin for Webpack. It can extract CSS declarations into a separate bundle. Now we are closer to the world we're used to, but without cascades. We also have our style declarations on component level.</Appear></ListItem>
          </List>
        </Slide>
        <Slide transition={['slide']} bgColor="black" notes="You can even put notes on your slide. How awesome is that?">
          <Heading size={4} textColor="tertiary" textFont="secondary">
            Radium
          </Heading>
          <Text textSize="1.5em" textColor="tertiary" margin="20px 0px 0px" bold>Radium has certain valuable ideas that are worth highlighting. Most importantly it provides abstractions required to deal with media queries and pseudo classes (e.g., :hover).
It expands the basic syntax as follows:
          </Text>
          <CodePane
            lang="javascript"
            source={require("raw!./radium.example")}
            margin="20px auto"/>
        </Slide>
        <Slide transition={['slide']} bgColor="primary" notes="You can even put notes on your slide. How awesome is that?">
          <Heading size={4} textColor="seconardy" textFont="secondary">
            Radium
          </Heading>
          <Text textSize="1.5em" textColor="secondary" margin="20px 0px 0px" bold>Eliminating CSS in favor of inline styles that are computed on the fly is a powerful approach, providing a number of benefits over traditional CSS:
          </Text>
          <List>
            <ListItem textSize="1.5em"><Appear fid="1">Scoped styles without selectors</Appear></ListItem>
            <ListItem textSize="1.5em"><Appear fid="2">Avoids specificity conflicts</Appear></ListItem>
            <ListItem textSize="1.5em"><Appear fid="3">Source order independence</Appear></ListItem>
            <ListItem textSize="1.5em"><Appear fid="4">Dead code elimination</Appear></ListItem>
            <ListItem textSize="1.5em"><Appear fid="5">Highly expressive</Appear></ListItem>
          </List>
        </Slide>
        <Slide transition={['slide']} bgColor="primary" notes="You can even put notes on your slide. How awesome is that?">
          <Heading size={4} textColor="seconardy" textFont="secondary">
            Other Radium Benefits
          </Heading>
          <List>
            <ListItem textSize="1.5em"><Appear fid="1">Conceptually simple extension of normal inline styles
</Appear></ListItem>
            <ListItem textSize="1.5em"><Appear fid="2">Browser state styles supported :hover, :focus, and :active</Appear></ListItem>
            <ListItem textSize="1.5em"><Appear fid="3">Media queries
</Appear></ListItem>
            <ListItem textSize="1.5em"><Appear fid="4">Automatic vendor prefixing</Appear></ListItem>
            <ListItem textSize="1.5em"><Appear fid="5">Keyframes animation helper
</Appear></ListItem>
<ListItem textSize="1.5em"><Appear fid="6">Modifier support
</Appear></ListItem>
<ListItem textSize="1.5em"><Appear fid="6">ES6 class and createClass support
</Appear></ListItem>
          </List>
        </Slide>
        <Slide transition={["slide", "spin"]} bgColor="primary">
          <Heading caps fit size={1} textColor="tertiary">
            Demo
          </Heading>
        </Slide>
        <Slide transition={["slide", "spin"]} bgColor="primary">
          <Heading caps fit size={1} textColor="tertiary">
            Other options?
          </Heading>
          <Text textSize="1.5em" textColor="secondary" margin="20px 0px 0px" bold>    CSS Modules starts from the premise that CSS rules should be local by default. Globals should be treated as a special case. Mark Dalgleish's post The End of Global CSS goes more detail into this.<br /><br />
              smart-css takes a similar approach except this time we are operating based on classes.<br /><br />
              And more cropping up daily it’s early days.
          </Text>
        </Slide>
      </Deck>
    );
  }
}
