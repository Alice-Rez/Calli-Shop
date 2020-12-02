import React from "react";
import StyledCloseButton from "../../styledComponents/StyledCloseButton";
import StyledLink from "../../styledComponents/StyledLink";
import StyledSection from "../../styledComponents/StyledSection";

export default function Terms() {
  return (
    <StyledSection basket>
      <StyledCloseButton>
        <StyledLink to="/">x</StyledLink>
      </StyledCloseButton>
      <h4>Terms & Conditions</h4>
      <p>
        <strong>
          This is just mock-up (demo) of the e-shop. It sells nothing!
        </strong>
      </p>
      <p>
        All rights to calligraphy svg graphics use at this page are reserved.
      </p>
      <p>
        Code of this page that can be found at{" "}
        <StyledLink to="https://github.com/Alice-Rez/Calli-Shop">
          GitHib
        </StyledLink>{" "}
        is under MIT license:{" "}
      </p>
      <StyledSection license>
        <p>MIT License</p>
        <p>Calli-shop - mock-up e-shop with Calligraphies</p>
        <p>Copyright (c) 2020 Alice Rez</p>
        <p>
          This MIT License applies ONLY to the code. All rights to calligraphy
          graphics (SVG) are reserved!
        </p>
        <p>This project uses these frameworks/tools: </p>
        <p>React (Copyright (c) Facebook, Inc. and its affiliates)</p>
        <p>Create React App (Copyright (c) 2013-present, Facebook, Inc.)</p>
        <p>React Router (Copyright (c) Facebook, Inc. and its affiliates.)</p>
        <p>
          Permission is hereby granted, free of charge, to any person obtaining
          a copy of this software and associated documentation files (the
          "Software"), to deal in the Software without restriction, including
          without limitation the rights to use, copy, modify, merge, publish,
          distribute, sublicense, and/or sell copies of the Software, and to
          permit persons to whom the Software is furnished to do so, subject to
          the following conditions:
        </p>
        <p>
          The above copyright notice and this permission notice shall be
          included in all copies or substantial portions of the Software.
        </p>
        <p>
          THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
          EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
          MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
          IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
          CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
          TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
          SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
        </p>
      </StyledSection>
    </StyledSection>
  );
}
