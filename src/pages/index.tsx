import React from "react";
import Layout from "../components/Layout";
import {
  Box,
  Card,
  CardContent,
  Grid,
  Typography,
  Theme,
  Avatar,
  Link,
} from "@material-ui/core";

import TreeView from "@material-ui/lab/TreeView";
import TreeItem from "@material-ui/lab/TreeItem";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import RemoveIcon from "@material-ui/icons/Remove";

import Timeline from "@material-ui/lab/Timeline";
import TimelineItem from "@material-ui/lab/TimelineItem";
import TimelineDot from "@material-ui/lab/TimelineDot";
import TimelineConnector from "@material-ui/lab/TimelineConnector";
import TimelineContent from "@material-ui/lab/TimelineContent";
import TimelineSeparator from "@material-ui/lab/TimelineSeparator";
import TimelineOppositeContent from "@material-ui/lab/TimelineOppositeContent";
import {makeStyles} from "@material-ui/styles";

import CentaurLogo from "../images/centaur_logo.png";
import BreakColumn from "../components/BreakColumn";

const centaurColorLight = "#bf976f";
const centaurColorDark = "#3a3a3c";
const centaurTitle = "Senior Software Engineer";

interface Skill {
  label: string;
  shown?: boolean;
  children?: Skill[];
}

const skills: Skill[] = [
  {
    label: "Backend",
    shown: true,
    children: [
      {
        label: "NodeJS/Typescript",
        shown: true,
        children: [
          {label: "Express"},
          {label: "Loopback"},
          {label: "Electron"},
        ],
      },
      {label: "C"},
      {label: "Python (Django, TensorFlow)"},
      {label: "Java"},
      {label: "PHP (Laravel)"},
    ],
  },
  {
    label: "Frontend",
    shown: true,
    children: [
      {
        label: "Javascript",
        shown: true,
        children: [
          {label: "React/AngularJS"},
          {label: "Material/Grommet"},
          {label: "Redux"},
        ],
      },
      {label: "HTML (pug)"},
      {label: "CSS (sass)"},
      {label: "canvas (PaperJS)"},
      {label: "SVG (Snap.svg)"},
    ],
  },
  {
    label: "Mobile",
    children: [{label: "react-native"}, {label: "firestore"}],
  },
  {
    label: "Databases",
    children: [{label: "MongoDB"}, {label: "LinvoDB"}],
  },
  {
    label: "Testing",
    children: [
      {label: "Mocha"},
      {label: "Chai"},
      {label: "Sinon"},
      {label: "Jasmine"},
    ],
  },
  {
    label: "Communication",
    children: [
      {label: "WebSocket (socket.io)"},
      {label: "MQTT"},
      {label: "AMQP"},
    ],
  },
  {
    label: "Automation",
    children: [
      {label: "Docker"},
      {label: "gitlab-ci"},
      {label: "Make/CMake/ninja"},
      {label: "Yocto Linux"},
    ],
  },
  {
    label: "Embedded OS",
    children: [
      {label: "ZephyrOS"},
      {label: "ContikiOS"},
      {label: "FreeRTOS"},
      {label: "TinyOS"},
    ],
  },
  {
    label: "Embedded Platforms",
    children: [
      {label: "STM32"},
      {label: "TI cc13xx-cc26xx"},
      {label: "s2lp transceiver"},
      {label: "sky motes"},
      {label: "z1"},
      {label: "Raspi"},
      {label: "Arduino"},
      {label: "DigiMesh XBee"},
    ],
  },
  {
    label: "Accelerators",
    children: [{label: "Nvidia GPUs"}, {label: "Xilinx FPGAs"}],
  },
];

const createTreeEl = ({label, children = []}: Skill) => (
  <TreeItem key={label} nodeId={label} label={label}>
    {children.map(child => createTreeEl(child))}
  </TreeItem>
);
const skillsTreeElements = skills.map(s => createTreeEl(s));

const shownSkillNodeIdReducer = (
  list,
  {label, shown = false, children = []}
): string[] => {
  if (shown) list.push(label);
  if (children) children.reduce(shownSkillNodeIdReducer, list);
  return list;
};
const defaultShownSkillsNodeIds: string[] = skills.reduce(
  shownSkillNodeIdReducer,
  []
);

const useStyles = makeStyles((theme: Theme) => ({
  cardContent: {
    [theme.breakpoints.down("sm")]: {
      padding: "8px",
    },
  },
  timeline: {
    padding: 0,
  },
  timelineLeftContent: {
    flex: 1,
    paddingLeft: 0,
    paddingRight: "8px",
  },
  timelineRightContent: {
    flex: 3,
    paddingLeft: "8px",
    paddingRight: 0,
  },
  centaurTitle: {
    color: centaurColorDark,
  },
  centaurTitlePlaceholder: {
    height: 0,
    visibility: "hidden",
  },
  centaurDesc: {
    color: centaurColorDark,
  },
  centaurDot: {
    backgroundColor: centaurColorDark,
  },
  centaurDotPlaceholder: {
    visibility: "hidden",
    height: 0,
    marginTop: 0,
    marginBottom: 0,
    paddingTop: 0,
    paddingBottom: 0,
  },
  centaurDotSecondary: {
    marginLeft: "20px",
    marginTop: "2px",
    backgroundColor: centaurColorDark,
    [theme.breakpoints.down("sm")]: {
      marginLeft: "12px",
    },
  },
  centaurAvatar: {
    [theme.breakpoints.down("sm")]: {
      width: theme.spacing(3),
      height: theme.spacing(3),
    },
  },
  centaurConnector: {
    backgroundColor: centaurColorDark,
  },
  uthDesc: {},
  uthDot: {
    backgroundColor: theme.palette.primary.dark,
  },
  uthConnector: {
    backgroundColor: theme.palette.primary.dark,
  },
  desc: {
    textAlign: "justify",
    [theme.breakpoints.down("sm")]: {
      padding: "8px",
      textAlign: "justify",
    },
  },
}));

const Index = () => {
  const classes = useStyles();
  return (
    <Layout title="About">
      <Box
        display="flex"
        flexGrow={1}
        flexDirection="column"
        justifyContent="start"
        alignItems="center"
      >
        <Grid container spacing={2} direction="row" justify="center">
          <Grid item xs={12} lg={10}>
            <Card>
              <CardContent className={classes.cardContent}>
                <Typography
                  variant="subtitle2"
                  component="h2"
                  color="textSecondary"
                >
                  Summary
                </Typography>
                <Typography variant="h6" component="h1" gutterBottom>
                  <b>Senior Software Engineer</b> at{" "}
                  <i>Centaur Analytics Inc</i>. and <b>PhD candidate</b> at{" "}
                  <i>University of Thessaly</i>.
                </Typography>
                <Typography style={{textAlign: "justify"}}>
                  I have experience as a full-stack web developer and as an
                  embedded system software engineer. I’m not afraid to take
                  responsibilities and I always volunteer when a challenging
                  issue/task occurs, as I believe that's the best way to improve
                  myself. I like to participate in teams, where teammates help
                  each other and exchange knowledge on a daily basis. I'm always
                  happy to assist my co-workers whenever they need my help and I
                  try to be open to suggestions to improve my work. In my free
                  time, I try to learn new stuff and contribute to open-source
                  software as much as I can.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <BreakColumn />
          <Grid item xs={12} sm={4} md={3} lg={2} style={{width: "100%"}}>
            <Card style={{height: "100%"}}>
              <CardContent className={classes.cardContent}>
                <Typography
                  variant="subtitle2"
                  component="h2"
                  color="textSecondary"
                >
                  Skills
                </Typography>
                <TreeView
                  defaultCollapseIcon={<ExpandMoreIcon />}
                  defaultExpandIcon={<ChevronRightIcon />}
                  defaultEndIcon={<RemoveIcon />}
                  defaultExpanded={defaultShownSkillsNodeIds}
                >
                  {skillsTreeElements}
                </TreeView>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={8} md={9} lg={8}>
            <Grid container spacing={2} direction="row" justify="center">
              <Grid item xs={12}>
                <Card>
                  <CardContent className={classes.cardContent}>
                    <Typography
                      variant="subtitle2"
                      component="h2"
                      color="textSecondary"
                    >
                      Work Experience
                    </Typography>
                    <Timeline className={classes.timeline}>
                      <TimelineItem>
                        <TimelineOppositeContent
                          className={classes.timelineLeftContent}
                        >
                          <Typography
                            component="h2"
                            variant="h6"
                            className={classes.centaurTitle}
                          >
                            {centaurTitle}
                          </Typography>
                          <Typography color="textSecondary">Current</Typography>
                        </TimelineOppositeContent>
                        <TimelineSeparator>
                          <TimelineDot className={classes.centaurDot}>
                            <Avatar
                              alt="N"
                              src={CentaurLogo}
                              className={classes.centaurAvatar}
                            />
                          </TimelineDot>
                          <TimelineConnector
                            className={classes.centaurConnector}
                          />
                        </TimelineSeparator>
                        <TimelineContent
                          className={classes.timelineRightContent}
                        >
                          <Card>
                            <CardContent
                              className={[
                                classes.centaurDesc,
                                classes.desc,
                              ].join(" ")}
                            >
                              <Typography variant="h6" component="h1">
                                <Link
                                  href="https://centaur.ag"
                                  color="inherit"
                                  target="_blank"
                                >
                                  Centaur Analytics
                                </Link>
                              </Typography>
                              <Typography variant="subtitle2" component="h1">
                                NodeJS (MEAN Stack), C (ZephyrOS)
                              </Typography>
                              <br />
                              <Typography>
                                From 2018, I'm a senior software engineer
                                leading Centaur’s embedded team while
                                occasionally supporting the web team by taking
                                some load off of their hands when a critical
                                deadline approached. This allowed me to rapidly
                                create truly end-to-end solutions, ranging from
                                the embedded device to the client application.
                              </Typography>
                              <br />
                              <Typography>
                                I am also responsible for managing the backlog,
                                coordinating the team, and interviewing/training
                                new team members.
                              </Typography>
                              <br />
                              <Typography>
                                Occasionally, on the side, I am supporting the
                                field engineers, and sometimes I directly
                                communicate with the clients to resolve their
                                issues.
                              </Typography>
                            </CardContent>
                          </Card>
                        </TimelineContent>
                      </TimelineItem>
                      <TimelineItem>
                        <TimelineOppositeContent
                          className={classes.timelineLeftContent}
                        >
                          <Typography
                            component="h2"
                            variant="h6"
                            className={[
                              classes.centaurTitle,
                              classes.centaurTitlePlaceholder,
                            ].join(" ")}
                          >
                            {centaurTitle}
                          </Typography>
                        </TimelineOppositeContent>
                        <TimelineSeparator>
                          <TimelineDot
                            className={[
                              classes.centaurDot,
                              classes.centaurDotPlaceholder,
                            ].join(" ")}
                          >
                            {/* Placeholder DoT just for correct alignment */}
                            <Avatar
                              alt="N"
                              src={CentaurLogo}
                              className={classes.centaurAvatar}
                            />
                          </TimelineDot>
                          <Typography color="textSecondary">2018</Typography>
                          <TimelineConnector
                            className={classes.centaurConnector}
                          />
                        </TimelineSeparator>
                        <TimelineContent
                          className={classes.timelineRightContent}
                        >
                          <Card>
                            <CardContent
                              className={[
                                classes.centaurDesc,
                                classes.desc,
                              ].join(" ")}
                            >
                              <Typography>
                                After my first year at centaur, I started
                                working with the IoT devices to support the
                                embedded team.
                              </Typography>
                            </CardContent>
                          </Card>
                        </TimelineContent>
                      </TimelineItem>
                      <TimelineItem>
                        <TimelineOppositeContent
                          className={classes.timelineLeftContent}
                        >
                          <Typography
                            component="h2"
                            variant="h6"
                            className={[
                              classes.centaurTitle,
                              classes.centaurTitlePlaceholder,
                            ].join(" ")}
                          >
                            {centaurTitle}
                          </Typography>
                        </TimelineOppositeContent>
                        <TimelineSeparator>
                          <TimelineDot
                            className={[
                              classes.centaurDot,
                              classes.centaurDotPlaceholder,
                            ].join(" ")}
                          >
                            {/* Placeholder DoT just for correct alignment */}
                            <Avatar
                              alt="N"
                              src={CentaurLogo}
                              className={classes.centaurAvatar}
                            />
                          </TimelineDot>
                          <Typography color="textSecondary">2017</Typography>
                          <TimelineConnector
                            className={classes.centaurConnector}
                          />
                        </TimelineSeparator>
                        <TimelineContent
                          className={classes.timelineRightContent}
                        >
                          <Card>
                            <CardContent
                              className={[
                                classes.centaurDesc,
                                classes.desc,
                              ].join(" ")}
                            >
                              <Typography>
                                In 2016 I joined the web app team, as a
                                full-stack developer, to work with Centaur’s
                                cloud services.
                              </Typography>
                            </CardContent>
                          </Card>
                        </TimelineContent>
                      </TimelineItem>
                      <TimelineItem>
                        <TimelineOppositeContent
                          className={classes.timelineLeftContent}
                        >
                          <Typography
                            component="h2"
                            variant="h6"
                            className={[
                              classes.centaurTitle,
                              classes.centaurTitlePlaceholder,
                            ].join(" ")}
                          >
                            {centaurTitle}
                          </Typography>
                        </TimelineOppositeContent>
                        <TimelineSeparator>
                          <TimelineDot
                            className={[
                              classes.centaurDot,
                              classes.centaurDotPlaceholder,
                            ].join(" ")}
                          >
                            {/* Placeholder DoT just for correct alignment */}
                            <Avatar
                              alt="N"
                              src={CentaurLogo}
                              className={classes.centaurAvatar}
                            />
                          </TimelineDot>
                          <Typography color="textSecondary">2016</Typography>
                        </TimelineSeparator>
                        <TimelineContent
                          className={classes.timelineRightContent}
                        ></TimelineContent>
                      </TimelineItem>
                    </Timeline>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={12}>
                <Card>
                  <CardContent className={classes.cardContent}>
                    <Typography
                      variant="subtitle2"
                      component="h2"
                      color="textSecondary"
                    >
                      Education
                    </Typography>
                    <Timeline className={classes.timeline}>
                      <TimelineItem>
                        <TimelineOppositeContent
                          className={classes.timelineLeftContent}
                        >
                          <Typography component="h2" variant="h6">
                            Ph.D.
                          </Typography>
                          <Typography color="textSecondary">
                            2019 - Current
                          </Typography>
                        </TimelineOppositeContent>
                        <TimelineSeparator>
                          <TimelineDot className={classes.uthDot} />
                          <TimelineConnector className={classes.uthConnector} />
                        </TimelineSeparator>
                        <TimelineContent
                          className={classes.timelineRightContent}
                        >
                          <Card>
                            <CardContent
                              className={[classes.uthDesc, classes.desc].join(
                                " "
                              )}
                            >
                              <Typography variant="h6" component="h1">
                                A distributed IOT System that Utilizes FPGA, for
                                Border and Edge Analytics, to Create a Smart,
                                Autonomous and Secure Industrial Management
                                Solution
                              </Typography>
                              <Typography>
                                <Link
                                  href="https://www.uth.gr/"
                                  color="inherit"
                                  target="_blank"
                                >
                                  University of Thessaly, Volos, Greece
                                </Link>
                              </Typography>
                            </CardContent>
                          </Card>
                        </TimelineContent>
                      </TimelineItem>
                      <TimelineItem>
                        <TimelineOppositeContent
                          className={classes.timelineLeftContent}
                        >
                          <Typography component="h2" variant="h6">
                            M.Sc.
                          </Typography>
                          <Typography color="textSecondary">
                            2012 - 2018
                          </Typography>
                        </TimelineOppositeContent>
                        <TimelineSeparator>
                          <TimelineDot className={classes.uthDot} />
                          <TimelineConnector className={classes.uthConnector} />
                        </TimelineSeparator>
                        <TimelineContent
                          className={classes.timelineRightContent}
                        >
                          <Card>
                            <CardContent
                              className={[classes.uthDesc, classes.desc].join(
                                " "
                              )}
                            >
                              <Typography variant="h6" component="h1">
                                <Link
                                  href="https://www.e-ce.uth.gr/"
                                  color="inherit"
                                  target="_blank"
                                >
                                  Electrical and Computer Engineering
                                </Link>
                              </Typography>
                              <Typography>
                                <Link
                                  href="https://www.uth.gr/"
                                  color="inherit"
                                  target="_blank"
                                >
                                  University of Thessaly, Volos, Greece
                                </Link>
                              </Typography>
                            </CardContent>
                          </Card>
                        </TimelineContent>
                      </TimelineItem>
                    </Timeline>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </Layout>
  );
};

export default Index;
