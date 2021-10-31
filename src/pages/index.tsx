import React, {useEffect} from "react";
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
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Tooltip,
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
import UthLogo from "../images/ece_uth_logo.png";
import AngularJS from "../images/technologies/angularjs_logo.png";
import NodeJS from "../images/technologies/nodejs_logo.png";
import MongoDB from "../images/technologies/mongodb_logo.png";
import Loopback from "../images/technologies/lb_logo.png";
import ZephyrOS from "../images/technologies/zephyr_logo.png";
import K8S from "../images/technologies/k8s_logo.png";

import BreakColumn from "../components/BreakColumn";
import {
  centaurColorDark,
  centaurColorLight,
  isMobile,
  mergeClasses,
} from "../helpers";

const centaurTitle = "Director Of Engineering";

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
        children: [{label: "Express"}, {label: "Loopback"}],
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
          {label: "Electron"},
        ],
      },
      {label: "HTML (pug)"},
      {label: "CSS (sass)"},
      {label: "canvas (PaperJS)"},
      {label: "SVG (Snap.svg)"},
    ],
  },
  {
    label: "Databases",
    children: [{label: "MongoDB"}, {label: "LinvoDB"}],
  },
  {
    label: "Testing",
    children: [{label: "Mocha/Chai/Sinon"}, {label: "Jasmine"}],
  },
  {
    label: "DevOps",
    shown: true,
    children: [
      {label: "Docker"},
      {label: "K8S/Kops/Helm"},
      {label: "AWS"},
      {label: "Azure + AKS"},
      {label: "gitlab-ci"},
      {label: "Make/CMake/ninja"},
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
    label: "Mobile",
    children: [{label: "react-native"}, {label: "firestore"}],
  },
  {
    label: "Embedded OS",
    children: [
      {label: "Yocto Linux"},
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
  timelineRightSubContent: {
    marginTop: "24px",
  },
  timelineTitlePlaceholder: {
    height: 0,
    visibility: "hidden",
  },
  timelineDotPlaceholder: {
    visibility: "hidden",
    height: 0,
    marginTop: 0,
    marginBottom: 0,
    paddingTop: 0,
    paddingBottom: 0,
  },
  timelineAvatarDot: {
    [theme.breakpoints.down("sm")]: {
      width: theme.spacing(3),
      height: theme.spacing(3),
    },
  },
  centaurTitle: {
    color: centaurColorDark,
  },
  centaurLightText: {
    color: centaurColorLight,
  },
  centaurDesc: {
    color: centaurColorDark,
  },
  centaurDot: {
    backgroundColor: centaurColorDark,
  },
  centaurConnector: {
    backgroundColor: centaurColorDark,
  },
  uthDesc: {},
  uthText: {
    color: theme.palette.primary.dark,
  },
  uthDot: {
    backgroundColor: theme.palette.grey[50],
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
  technology: {
    width: theme.spacing(15),
    height: theme.spacing(15),
    [theme.breakpoints.down("sm")]: {
      width: theme.spacing(7),
      height: theme.spacing(7),
    },
    [theme.breakpoints.between("sm", "md")]: {
      width: theme.spacing(11),
      height: theme.spacing(11),
    },
    [theme.breakpoints.between("md", "lg")]: {
      width: theme.spacing(13),
      height: theme.spacing(13),
    },
  },
  technologyWrapper: {
    flex: 1,
    display: "flex",
    justifyContent: "center",
  },
}));

const skillsAccordion = "skills";

const Index = () => {
  const mobile = isMobile();
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState<string>("");
  const handleChange = (accodrion: string) => (
    event: React.ChangeEvent<{}>,
    isExpanded: boolean
  ) => {
    setExpanded(isExpanded ? accodrion : "");
  };
  useEffect(() => {
    setExpanded(mobile ? "" : skillsAccordion);
  }, [mobile]);
  const centaurLogoEl = (
    <Avatar alt="N" src={CentaurLogo} className={classes.timelineAvatarDot} />
  );
  const uthLogoEl = (
    <Avatar alt="N" src={UthLogo} className={classes.timelineAvatarDot} />
  );
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
              <CardContent>
                <Typography
                  variant="subtitle2"
                  component="h2"
                  color="textSecondary"
                >
                  Summary
                </Typography>
                <Typography variant="h6" component="h2" gutterBottom>
                  <b>{centaurTitle}</b> at <i>Centaur Analytics Inc</i>. and{" "}
                  <b>Ph.D. candidate</b> at <i>University of Thessaly</i>.
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
          <Grid item xs={12} sm={4} md={3} lg={2}>
            <Accordion
              expanded={expanded === skillsAccordion}
              onChange={handleChange(skillsAccordion)}
            >
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography
                  variant="subtitle2"
                  component="h2"
                  color="textSecondary"
                >
                  Skills
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <TreeView
                  defaultCollapseIcon={<ExpandMoreIcon />}
                  defaultExpandIcon={<ChevronRightIcon />}
                  defaultEndIcon={<RemoveIcon />}
                  defaultExpanded={defaultShownSkillsNodeIds}
                >
                  {skillsTreeElements}
                </TreeView>
              </AccordionDetails>
            </Accordion>
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
                          <Typography
                            color="textSecondary"
                            className={classes.centaurLightText}
                          >
                            Current
                          </Typography>
                        </TimelineOppositeContent>
                        <TimelineSeparator>
                          <TimelineDot className={classes.centaurDot}>
                            {centaurLogoEl}
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
                              className={mergeClasses(
                                classes.centaurDesc,
                                classes.desc
                              )}
                            >
                              <Typography
                                variant="h6"
                                component="h2"
                                className={classes.centaurLightText}
                              >
                                <Link
                                  href="https://centaur.ag"
                                  color="inherit"
                                  target="_blank"
                                >
                                  Centaur Analytics
                                </Link>
                              </Typography>
                              <Typography variant="subtitle2" component="h2">
                                NodeJS (MEAN Stack), C (ZephyrOS), K8S
                              </Typography>
                              <Grid
                                direction="row"
                                // alignItems="center"
                                container
                              >
                                <Grid
                                  item
                                  className={classes.technologyWrapper}
                                >
                                  <Tooltip title="MongoDB" aria-label="mongodb">
                                    <Link
                                      href="https://www.mongodb.com/"
                                      target="_blank"
                                    >
                                      <Avatar
                                        alt="MongoDB"
                                        src={MongoDB}
                                        className={classes.technology}
                                      />
                                    </Link>
                                  </Tooltip>
                                </Grid>
                                <Grid className={classes.technologyWrapper}>
                                  <Tooltip
                                    title="Loopback"
                                    aria-label="loopback"
                                  >
                                    <Link
                                      href="https://loopback.io/lb3"
                                      target="_blank"
                                    >
                                      <Avatar
                                        alt="Loopback"
                                        src={Loopback}
                                        className={classes.technology}
                                      />
                                    </Link>
                                  </Tooltip>
                                </Grid>
                                <Grid className={classes.technologyWrapper}>
                                  <Tooltip
                                    title="AngularJS"
                                    aria-label="angularjs"
                                  >
                                    <Link
                                      href="https://angularjs.org/"
                                      target="_blank"
                                    >
                                      <Avatar
                                        alt="AngularJS"
                                        src={AngularJS}
                                        className={classes.technology}
                                      />
                                    </Link>
                                  </Tooltip>
                                </Grid>
                                <Grid className={classes.technologyWrapper}>
                                  <Tooltip title="NodeJS" aria-label="nodejs">
                                    <Link
                                      href="https://nodejs.org/"
                                      target="_blank"
                                    >
                                      <Avatar
                                        alt="NodeJS"
                                        src={NodeJS}
                                        className={classes.technology}
                                      />
                                    </Link>
                                  </Tooltip>
                                </Grid>
                                <Grid className={classes.technologyWrapper}>
                                  <Tooltip title="ZephyrOS" aria-label="zephyr">
                                    <Link
                                      href="https://www.zephyrproject.org/"
                                      target="_blank"
                                    >
                                      <Avatar
                                        alt="ZephyrOS"
                                        src={ZephyrOS}
                                        className={classes.technology}
                                      />
                                    </Link>
                                  </Tooltip>
                                </Grid>
                                <Grid
                                  item
                                  className={classes.technologyWrapper}
                                >
                                  <Tooltip
                                    title="Kubernetes"
                                    aria-label="kubernetes"
                                  >
                                    <Link
                                      href="https://kubernetes.io/"
                                      target="_blank"
                                    >
                                      <Avatar
                                        alt="K8S"
                                        src={K8S}
                                        className={classes.technology}
                                      />
                                    </Link>
                                  </Tooltip>
                                </Grid>
                              </Grid>
                              <br />
                              <Typography>
                                In 2021, I became Centaur's Director Of
                                Engineering in charge of leading the Centaur's
                                R&D department. I'm responsible for leading the
                                Product Development process and orchestrating
                                the entire team's task workflow.
                              </Typography>
                              <br />
                              <Typography>
                                With the help of our team, I started scaling our
                                department by adding more members to it and I
                                worked closely with all team leads to make sure
                                we identify and understand any personal or team
                                problem and try to resolve it as fast as
                                possible.
                              </Typography>
                              <br />
                              <Typography>
                                Finally, as I was already experienced with
                                Centaur's cloud infrastructure I started working
                                with our DevOps team to identify and resolve
                                cluster and deployment issues. To make our cloud
                                more stable and easier to monitor and at the
                                same time build my DevOps knowledge, I started
                                upgrading our technology to use more modern
                                tools and versions and moved our cluster from
                                self-managed to provider-managed.
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
                            className={mergeClasses(
                              classes.centaurTitle,
                              classes.timelineTitlePlaceholder
                            )}
                          >
                            {centaurTitle}
                          </Typography>
                        </TimelineOppositeContent>
                        <TimelineSeparator>
                          <TimelineDot
                            className={mergeClasses(
                              classes.centaurDot,
                              classes.timelineDotPlaceholder
                            )}
                          >
                            {/* Placeholder DoT just for correct alignment */}
                            {centaurLogoEl}
                          </TimelineDot>
                          <Typography
                            color="textSecondary"
                            className={classes.centaurLightText}
                          >
                            2021
                          </Typography>
                          <TimelineConnector
                            className={classes.centaurConnector}
                          />
                        </TimelineSeparator>
                        <TimelineContent
                          className={mergeClasses(
                            classes.timelineRightContent,
                            classes.timelineRightSubContent
                          )}
                        >
                          <Card>
                            <CardContent
                              className={mergeClasses(
                                classes.centaurDesc,
                                classes.desc
                              )}
                            >
                              <Typography>
                                In 2018, I became a senior software engineer and
                                leader of Centaur’s embedded team and in
                                parallel I was supporting the web team by taking
                                some load off of their hands when a critical
                                deadline approached. This allowed me to rapidly
                                create truly end-to-end solutions, ranging from
                                the embedded device to the client application.
                              </Typography>
                              <br />
                              <Typography>
                                I was also responsible for managing the backlog,
                                coordinating the team, and interviewing/training
                                new team members.
                              </Typography>
                              <br />
                              <Typography>
                                Occasionally, on the side, I was supporting the
                                field engineers, and sometimes I directly
                                communicated with the clients to resolve their
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
                            className={mergeClasses(
                              classes.centaurTitle,
                              classes.timelineTitlePlaceholder
                            )}
                          >
                            {centaurTitle}
                          </Typography>
                        </TimelineOppositeContent>
                        <TimelineSeparator>
                          <TimelineDot
                            className={mergeClasses(
                              classes.centaurDot,
                              classes.timelineDotPlaceholder
                            )}
                          >
                            {/* Placeholder DoT just for correct alignment */}
                            {centaurLogoEl}
                          </TimelineDot>
                          <Typography
                            color="textSecondary"
                            className={classes.centaurLightText}
                          >
                            2018
                          </Typography>
                          <TimelineConnector
                            className={classes.centaurConnector}
                          />
                        </TimelineSeparator>
                        <TimelineContent
                          className={mergeClasses(
                            classes.timelineRightContent,
                            classes.timelineRightSubContent
                          )}
                        >
                          <Card>
                            <CardContent
                              className={mergeClasses(
                                classes.centaurDesc,
                                classes.desc
                              )}
                            >
                              <Typography>
                                After my first year at centaur, I started
                                working with IoT devices to support the embedded
                                team. I initially participated as a secondary
                                developer for the software of the IP-enabled
                                devices but I quickly took the lead of all the
                                software and firmware layers for such devices.
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
                            className={mergeClasses(
                              classes.centaurTitle,
                              classes.timelineTitlePlaceholder
                            )}
                          >
                            {centaurTitle}
                          </Typography>
                        </TimelineOppositeContent>
                        <TimelineSeparator>
                          <TimelineDot
                            className={mergeClasses(
                              classes.centaurDot,
                              classes.timelineDotPlaceholder
                            )}
                          >
                            {/* Placeholder DoT just for correct alignment */}
                            {centaurLogoEl}
                          </TimelineDot>
                          <Typography
                            color="textSecondary"
                            className={classes.centaurLightText}
                          >
                            2017
                          </Typography>
                          <TimelineConnector
                            className={classes.centaurConnector}
                          />
                        </TimelineSeparator>
                        <TimelineContent
                          className={mergeClasses(
                            classes.timelineRightContent,
                            classes.timelineRightSubContent
                          )}
                        >
                          <Card>
                            <CardContent
                              className={mergeClasses(
                                classes.centaurDesc,
                                classes.desc
                              )}
                            >
                              <Typography>
                                In 2016 I joined the web app team, as a
                                full-stack developer, to work with Centaur’s
                                cloud services. My responsibilities included
                                both back-end and front-end development, but I
                                focused more on the back-end working with its
                                architecture and migrating from monolith to
                                microservices to build a more scalable cloud
                                infrastructure.
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
                            className={classes.timelineTitlePlaceholder}
                          >
                            {centaurTitle}
                          </Typography>
                        </TimelineOppositeContent>
                        <TimelineSeparator>
                          <TimelineDot
                            className={mergeClasses(
                              classes.centaurDot,
                              classes.timelineDotPlaceholder
                            )}
                          >
                            {/* Placeholder DoT just for correct alignment */}
                            {centaurLogoEl}
                          </TimelineDot>
                          <Typography
                            color="textSecondary"
                            className={classes.centaurLightText}
                          >
                            2016
                          </Typography>
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
                          <Typography
                            color="textSecondary"
                            className={classes.uthText}
                          >
                            Current
                          </Typography>
                        </TimelineOppositeContent>
                        <TimelineSeparator>
                          <TimelineDot className={classes.uthDot}>
                            {uthLogoEl}
                          </TimelineDot>
                          <TimelineConnector className={classes.uthConnector} />
                        </TimelineSeparator>
                        <TimelineContent
                          className={classes.timelineRightContent}
                        >
                          <Card>
                            <CardContent
                              className={mergeClasses(
                                classes.uthDesc,
                                classes.desc
                              )}
                            >
                              <Typography
                                variant="h6"
                                component="h2"
                                className={classes.uthText}
                              >
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
                        </TimelineOppositeContent>
                        <TimelineSeparator>
                          <TimelineDot
                            className={mergeClasses(
                              classes.uthDot,
                              classes.timelineDotPlaceholder
                            )}
                          >
                            {/* Placeholder DoT just for correct alignment */}
                            {uthLogoEl}
                          </TimelineDot>
                          <Typography
                            color="textSecondary"
                            className={classes.uthText}
                          >
                            2018
                          </Typography>
                          <TimelineConnector className={classes.uthConnector} />
                        </TimelineSeparator>
                        <TimelineContent
                          className={mergeClasses(
                            classes.timelineRightContent,
                            classes.timelineRightSubContent
                          )}
                        >
                          <Card>
                            <CardContent
                              className={mergeClasses(
                                classes.uthDesc,
                                classes.desc
                              )}
                            >
                              <Typography
                                variant="h6"
                                component="h2"
                                className={classes.uthText}
                              >
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
                      <TimelineItem>
                        <TimelineOppositeContent
                          className={mergeClasses(
                            classes.timelineLeftContent,
                            classes.timelineTitlePlaceholder
                          )}
                        >
                          <Typography component="h2" variant="h6">
                            Uth..
                          </Typography>
                        </TimelineOppositeContent>
                        <TimelineSeparator>
                          <TimelineDot
                            className={mergeClasses(
                              classes.uthDot,
                              classes.timelineDotPlaceholder
                            )}
                          >
                            {/* Placeholder DoT just for correct alignment */}
                            {uthLogoEl}
                          </TimelineDot>
                          <Typography
                            color="textSecondary"
                            className={classes.uthText}
                          >
                            2012
                          </Typography>
                        </TimelineSeparator>
                        <TimelineContent
                          className={classes.timelineRightContent}
                        ></TimelineContent>
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
