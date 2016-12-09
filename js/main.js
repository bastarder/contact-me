var $c = function (selector, father) {
    var record = father ? father.getElementsByClassName(selector) : document.getElementsByClassName(selector);
    return record.length > 1 ? record : record[0];
}

var skillIconHoverEvent = function () {
    Array.prototype.slice.call($c('fa', $c('skill-icon'))).forEach(function (icon) {

        var type = icon.className.match(/fa-([\w]+)/)[1];

        icon.onmouseout = function () {
            var right = $c('skill-dsc-right');
            var left = $c('skill-dsc-left');
            right.className = "skill-dsc-right bounceOut animated";
            left.className = "skill-dsc-left bounceOut animated";
        };

        icon.onmouseover = function (type) {
            return function () {
                var skillDsc = {
                    html5: {
                        left: "html5",
                        right: "熟悉代码规范 编写美观页面"
                    },
                    css3: {
                        left: "CSS",
                        right: "代码简单明亮 动画效果丰富"
                    },
                    codepen: {
                        left: "CodePen",
                        right: "实用在线平台 完成数个页面"
                    },
                    chrome: {
                        left: "Chorme",
                        right: "熟悉F12调试 使用开发两不误"
                    },
                    git: {
                        left: "Git",
                        right: "熟练使用Git 代码再也不混乱"
                    },
                    linux: {
                        left: "Linux",
                        right: "系统刚入门 强大的无话说"
                    },
                    apple: {
                        left: "Mac Os",
                        right: "熟练运用本系统 开发娱乐游刃有余"
                    },
                    slack: {
                        left: "Slack",
                        right: "曾经使用过 团队开发币不可少"
                    }
                }
                var right = $c('skill-dsc-right');
                var left = $c('skill-dsc-left');
                right.className = "skill-dsc-right flipInX animated";
                left.className = "skill-dsc-left flipInX animated";
                $c('flash-text', right).textContent = skillDsc[type].right;
                $c('flash-text', left).textContent = skillDsc[type].left;
            }
        } (type);

    })
}

window.onload = function () {
    skillIconHoverEvent();
}
