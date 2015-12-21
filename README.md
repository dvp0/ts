/*************************************************************************
*
*  Kean University
*  Fall 2015
*  Advanced Analysis of Algorithms
*
*  Course: CPS 5440
*  Author: Dev Patel
*  Homework: 2
*  Problem: Travelling Salesman
*  Description:
*
Travelling salesman problem 2-approximation algorithm.

Program starts with n randomized node(s) which are all connected to each other (has no effect on the process).
Then uses Prim's algorithm to create a Minimum Spanning Tree.
It does a pre-order walk on the MST to get a tour.
Which gives us an approximate solution to the Travelling Salesman Problem.

*************************************************************************/