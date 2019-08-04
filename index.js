// @flow

import { foo } from "a";
import { bar } from "b";
import { re_exported_bar, baz } from "c";

(foo: "Module A. v1.0.0");
(bar: "Module B. v1.0.0"); // ?
(re_exported_bar: "Module B. v2.0.0");
(baz: "Module C. v1.0.0");
