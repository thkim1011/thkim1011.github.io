{% extends "template.html" %}

{% block title %}About Me{% endblock %}

{% block content %}
# About Me

<section>
**Note: Website under construction!**

I'm an undergraduate at UC Berkeley majoring in Computer Science
and Pure Mathematics. During my time at Berkeley, I've focused on a wide
variety of subjects including [Machine Learning](https://www.eecs189.org/),
[Deep Reinforcement Learning](http://rail.eecs.berkeley.edu/deeprlcourse/),
[Operating Systems](https://cs162.eecs.berkeley.edu/),
[Combinatorial Algorithms](https://people.eecs.berkeley.edu/~satishr/cs270/sp17/),
[Real and Functional Analysis](https://math.berkeley.edu/~rieffel/),
and [Abstract Algebra](https://math.berkeley.edu/~nadler/250afall2018).
I usually spend my day playing piano, solving
math problems, programming something new, or (as of recently) playing go.
I'll be primarily using my website to post my notes on some of the
classes I've taken or posting some random insight to my blog.

## Work Experience
During the summer of 2019, I worked as a Software Development Intern at Amazon with the
[Treasure Truck](https://www.amazon.com/treasuretruck) team.
My project was to create a web application for handling permissions to
access an internal-use Android application. I wrote the frontend in
[Angular Typescript](https://angular.io/) and backend with
[Spring Framework](https://spring.io/),
while also working with a [DynamoDB database](https://aws.amazon.com/dynamodb/)
which stored these permissions.

Currently, I do research in Professor [Jennifer Listgarten's](http://www.jennifer.listgarten.com/)
lab which focuses on applying Machine Learning to Biology. The project that I am working on is a novel
method to aggregate several datasets measured with possibly different calibrations and apply regression on
all of these simultaneously while achieving better results than naively applying regression on the union
of these datasets. The high level approach is to do so by computing the maximum likelihood model. This
should ultimately be applicable to many biological datasets as datasets in biology are generally limited.

## Projects
One of the first projects I've worked on was MIX. MIX is a hypothetical computer with a small memory
space and simple assembly language that was designed by Donald Knuth in order to write his renown textbooks
[The Art of Computer Programming](https://www-cs-faculty.stanford.edu/~knuth/taocp.html).
This was my first interaction with an assembly language, so I created an
[Assembler and Simulator for MIX](https://github.com/thkim1011/mix). This was written
completely in Java.
</section>
{% endblock %}
